import axios from "axios";

export default {
    getRandomDog: function() {
        return axios.get("https://dog.ceo/api/breeds/image/random");
    },
 jesse-branch
    getDogsOfBreed: function(breed) {


 main
        return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
    },
    getBaseBreedsList: function() {
        return axios.get("https://dog.ceo/api/breeds/list")
    }
};