import AsyncStorage from "@react-native-async-storage/async-storage";

export const storage = {
 setString : async (key :string, value : string) =>{
    await AsyncStorage.setItem(key, value);
 },

 getString : async (key :string) =>{
   return await AsyncStorage.getItem(key);
 },

  delete: async (key: string) => {
    await AsyncStorage.removeItem(key);
  },
};
