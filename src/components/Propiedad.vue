<script setup>
    defineProps({
        propiedad:{
            type:Object
        },
        price:{
            type: Function
        }
    })

</script>

<template>
    <v-col
        cols="12"
        md="4"
    >
            <v-card>
                <v-img :src="propiedad.imagen" height="250" cover/>

                <v-card-title class="font-weight-bold" >
                    {{ propiedad.titulo }}
                </v-card-title>

                <v-card-subtitle>
                    {{ propiedad.descripcion }}
                </v-card-subtitle>
                <v-card-subtitle>
                    Precio: {{ price (propiedad.precio) }}
                </v-card-subtitle>

                <template v-slot:actions>
                    <v-btn
                        block
                        color="info"
                        variant="outlined"
                        :to="{name: 'propiedad', params: {id: propiedad.id} }"
                    >
                        Ver informacion
                    </v-btn>
                </template>
            </v-card>
    </v-col>
</template>
