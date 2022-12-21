<template>
    <v-card>
        <v-card-text>
            <v-row>
                <v-col cols="12" sm="12" md="12" lg="12" xl="4">
                    <img :src="item.thumbnail" alt="Paris" width="90px" />
                </v-col>
                <v-col cols="8">
                    <p class="mb-0">
                        <b>{{ item.brand }}</b>
                    </p>
                    {{ item.description }}
                </v-col>
                <v-col cols="12" class="text-center">
                    <v-btn class="ma-1" outlined @click="$emit('delete')">
                        <v-icon color="red" small> mdi-delete </v-icon>
                    </v-btn>
                    <v-btn class="ml-2" outlined>
                        <v-icon :disabled="item.numberToBuy <= 1 ? true : false" color="red" class="mr-2"
                            @click="$emit('remove')">
                            mdi-minus
                        </v-icon>
                        {{ item.numberToBuy }}
                        <v-icon color="green" class="ml-2" @click="$emit('add')">
                            mdi-plus
                        </v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "showProdct",
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    watch: {
        '$store.state.cart': {
            handler() {
                this.$forceUpdate()
            }, deep: true
        }
    }
};
</script>

<style>

</style>