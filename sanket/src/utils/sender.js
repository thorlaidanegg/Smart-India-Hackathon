
import axios from 'axios';

 
    export const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.thingspeak.com/channels/2174991/feeds.json?api_key=9NUZQNQEH2JIQPFI&results=1'
           
        );

        return response.data

      } catch (error) {
        console.error('Error fetching ThingSpeak data:', error);
      }
    }  
  
  







