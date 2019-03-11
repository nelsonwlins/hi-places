new Vue ({
    el: '#add-places',
    data: {
        name: null,
        address: null,
    },
    methods: {
        checkform: function() {
            //Upon submitting the form only upload the information if both field have something
            if (this.name && this.address) {
                //Store the the places name as the key and the address as value
                localStorage.setItem(this.name, this.address);
            }
        }
    }
});

new Vue ({
    el: '#card-list',
    data: {
        places: {}
    },
    mounted() {
        listPlaces = {};    //this variable is a dictionary where all the values on the lacalstorage will be stored 
        keys = Object.keys(localStorage);   //return and array with all the value on the Key column of the localStorage
        i = keys.length;    //return the length of the the keys array

        //interate through the amount of values on the localStorage
        while(i--) {
            //keys[i] returns a key from the localStorage and getItem(keys[i]) returns its correspondent value
            listPlaces[keys[i]] = localStorage.getItem(keys[i]);
        }

        //give the dictionary "listPlaces" to the "places" data so it can be accessed on the .html file
        this.places = listPlaces;
    }
});