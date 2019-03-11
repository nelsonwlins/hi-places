new Vue ({
    el: '#add-places',
    data: {
        errors: [],
        name: null,
        address: null,
    },
    mounted() {
        this.address = new google.maps.places.Autocomplete(this.$refs.autocomplete),
        {types: ['geocode']}
    },
    methods: {
        checkform: function(e) {
            if (this.name && this.address) {
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
        listPlaces = {};
        keys = Object.keys(localStorage);
        i = keys.length;

        while(i--) {
            listPlaces[keys[i]] = localStorage.getItem(keys[i]);
        }

        this.places = listPlaces;
    }
});