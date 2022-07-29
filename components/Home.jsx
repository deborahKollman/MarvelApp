import * as React from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import CharacterCard from './CharacterCard';
import apiParams from '../config.js';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';

export default function Home(props) {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    const { ts, apikey, hash, baseURL } = apiParams;

    useEffect(() => {
        axios.get(`${baseURL}/v1/public/characters`, {
        params: {
            ts,
            apikey,
            hash
        }
        })
        .then(response => setData(response.data.data.results))
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
    }, []);

    function searchCharacter(e) {
      if(search) {
        setLoading(true);
        axios.get(`${baseURL}/v1/public/characters`, {
          params: {
            ts,
            apikey,
            hash,
            nameStartsWith: search
          }
        })
          .then(response => setData(response.data.data.results))
          .catch(error => console.error(error))
          .finally(() => setLoading(false));
      }
    }

    const handleChange = (value) => {
      setSearch(value)
      if(value === ''){
        axios.get(`${baseURL}/v1/public/characters`, {
          params: {
              ts,
              apikey,
              hash
          }
          })
          .then(response => setData(response.data.data.results))
          .catch(error => console.error(error))
          .finally(() => setLoading(false));
      }
    }

    return (
        <View>
          {isLoading 
            ? <ActivityIndicator size="large" color="#00ff00" /> 
            : (
              <View>
                <Searchbar
                  placeholder="Search for character..."
                  onChangeText={handleChange}
                  value={search}
                  onIconPress={searchCharacter}
                  onSubmitEditing={searchCharacter}
                />
                <FlatList
                  data={data}
                  keyExtractor={({ id }) => id.toString()}
                  renderItem={({ item }) => (
                    <CharacterCard 
                      {...props} 
                      id={item.id}
                      image={`${item?.thumbnail?.path}.${item?.thumbnail.extension}`} 
                      name={item.name} />
                  )}
                />
              </View>
            )
          }
        </View>
    );
} 