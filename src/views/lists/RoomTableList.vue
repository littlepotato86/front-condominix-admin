<template>
  <div class="q-pa-md">
    <q-table
      title="Espaços"
      :data="rooms"
      :columns="columns"
      row-key="_id"
      selection="single"
      :selected.sync="selected">
    
    
    <template v-slot:top >
      <div class="q-pa-md q-gutter-sm" style='align: left'>
         <q-btn round color="green" flat icon="add" />
         <q-btn round color="amber" flat icon="edit" />
         <q-btn round color="red" flat icon="remove" />
      </div>
    </template>
    

  </q-table>
  </div>
</template>

<script>
import api from '@/api/RoomServices'

export default {
  data () {
    return {
      rooms: [],
      model: {},
      selected: [],

      pagination: {
        sortBy: 'name',
        descending: false,
        page: 2,
        rowsPerPage: 10
        // rowsNumber: xx if getting data from a server
      },
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Salão',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'numPlaces', align: 'center', label: 'Nº Lugares', field: 'numPlaces', sortable: true },
        { name: 'numTables', align: 'center', label: 'Mesas', field: 'numTables', sortable: true },
       
      ],
    }
  },

  async created(){
    await this.refreshRooms()
  },

  methods: {
    async refreshRooms() {
      var response = await api.getRooms()
      console.log(response.data)
      this.rooms = response.data
    }

  }
}
</script>