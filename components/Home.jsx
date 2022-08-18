import * as React from 'react';
import { View, ActivityIndicator, FlatList, Dimensions, SafeAreaView, Text } from 'react-native';
import CharacterCard from './CharacterCard';
import apiParams from '../config.js';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { useHeaderHeight } from '@react-navigation/elements';
import { useIsFocused } from '@react-navigation/native';

export default function Home(props) {

    const [isLoading, setLoading] = useState(true);
    const [isFetching, setFetching] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const [data, setData] = useState([]);
    const [dataOffset, setDataOffset] = useState(20);
    const [search, setSearch] = useState('');
    const [dataEnd,setDataEnd] = useState(false);
    const [searchResults, setSearchResults] = useState(0);

    const { ts, apikey, hash, baseURL } = apiParams;
    const headerHeight = useHeaderHeight();
    const height = Dimensions.get('window').height - headerHeight;
    const isFocused = useIsFocused();

    useEffect(() => {
      if(!isFocused)return;
      setLoading(true)
        axios.get(`${baseURL}/v1/public/characters`, {
        params: {
            ts,
            apikey,
            hash
        }
        })
        .then(response => {
          setData(response.data.data.results);
        })
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
    }, [isFocused]);

    const searchCharacter = async (e)=> {
      if(search) {
        setLoading(true);
        try {
          let response = await axios.get(`${baseURL}/v1/public/characters`, {
          params: {
            ts,
            apikey,
            hash,
            nameStartsWith: search
          } })
          setSearchResults(response.data.data.total);
          setData(response.data.data.results);
          setDataOffset(20);
          setIsSearch(true);
          if(response.data.data.count<20) setDataEnd(true);
        } catch (error) {
          console.error(error)
        }
        setLoading(false)
      }
    }

    const handleInputChange = async (value) => {
      setSearch(value)
      if(value === ''){
        try {
          let response = await axios.get(`${baseURL}/v1/public/characters`, {
            params: {
                ts,
                apikey,
                hash
            }
            })
            setData(response.data.data.results);
            setDataEnd(false);
            setDataOffset(20);
            setIsSearch(false);
        } catch (error) {
          console.error(error)
        }
        setLoading(false)
      }
    }

    const handleEndReach = async (distanceFromEnd) => {
      if(distanceFromEnd.distanceFromEnd<0) return;
      setFetching(true);
      if(!dataEnd){
        if(!isSearch){
          try {
            let response = await axios.get(`${baseURL}/v1/public/characters`, {
              params: {
                  offset:dataOffset,
                  ts,
                  apikey,
                  hash,
              }
            })
            setData(data.concat(response.data.data.results));
            setDataOffset(dataOffset+20);
            if(response.data.data.count<20) setDataEnd(true);
          } catch (error) {
            console.error(error)
          }
        }else{
          try {
            let response = await axios.get(`${baseURL}/v1/public/characters`, {
              params: {
                  offset:dataOffset,
                  ts,
                  apikey,
                  hash,
                  nameStartsWith: search
              }
            })
            setData(data.concat(response.data.data.results));
              setDataOffset(dataOffset+20);
              if(response.data.data.count<20) setDataEnd(true);
          } catch (error) {
            console.error(error)
          }
        }
      }
      setFetching(false);
    }

    return (
        <SafeAreaView  
        style={{flex:1}}
        >
          {isLoading 
            ? <ActivityIndicator size="large" color="#00ff00" /> 
            : (
              <View style={{height:height}}>
                <Searchbar
                  placeholder="Search for character..."
                  onChangeText={handleInputChange}
                  value={search}
                  onIconPress={searchCharacter}
                  onSubmitEditing={searchCharacter}
                />
                <FlatList
                  data={data}
                  keyExtractor={({ id }) => id.toString()}
                  initialNumToRender={20}
                  refreshing={isLoading}
                  onEndReachedThreshold={0}
                  onEndReached={handleEndReach}
                  ListHeaderComponent={isSearch?(<Text>Search results for "{search}": {searchResults}</Text>):null}
                  ListFooterComponent={
                    (<View>
                      {isFetching && <ActivityIndicator size="large" color="#00ff00" /> }
                      {dataEnd && <Text>End of results</Text>}
                    </View>)
                  }
                  renderItem={({ item }) => (
                    <CharacterCard 
                      {...props} 
                      id={item.id}
                      image={`${item?.thumbnail?.path}.${item?.thumbnail.extension}`} 
                      name={item.name} 
                      onChange={()=>{}}
                      />
                  )}
                />
              </View>
            )
          }
        </SafeAreaView>
    );
} 