<template>
    <div>
        <v-sheet v-if="$vuetify.breakpoint.smAndUp"  class="mt-4 pa-8">
            <h3>Top Categories</h3>
            <v-radio-group :mandatory="true">
                <div>
                    <input type="radio" name="radiobutton" v-model="r" value="0" @change="changeFilter">
                    <label>All courses</label>
                </div>
                <div>
                    <input type="radio" name="radiobutton" v-model="r" value="1" @change="changeFilter">
                    <label>Programming</label>
                </div>
                <div>
                    <input type="radio" name="radiobutton" v-model="r" value="2" @change="changeFilter">
                    <label>Data Science</label>
                </div>
                <div>
                    <input type="radio" name="radiobutton" v-model="r" value="3" @change="changeFilter">
                    <label>UX Design</label>
                </div>
                <div>
                    <input type="radio" name="radiobutton" v-model="r" value="4" @change="changeFilter">
                    <label>Web Development</label>
                </div>
                <div>
                    <input type="radio" name="radiobutton" v-model="r" value="5" @change="changeFilter">
                    <label>Marketing</label>
                </div>
            </v-radio-group>
        </v-sheet>

        <v-expansion-panels v-else>
            <v-expansion-panel>
                <v-expansion-panel-header>
                    Top Categories
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-radio-group :mandatory="true">
                        <div>
                            <input type="radio" name="radiobutton" v-model="r" value="0" @change="changeFilter">
                            <label>All courses</label>
                        </div>
                        <div>
                            <input type="radio" name="radiobutton" v-model="r" value="1" @change="changeFilter">
                            <label>Programming</label>
                        </div>
                        <div>
                            <input type="radio" name="radiobutton" v-model="r" value="2" @change="changeFilter">
                            <label>Data Science</label>
                        </div>
                        <div>
                            <input type="radio" name="radiobutton" v-model="r" value="3" @change="changeFilter">
                            <label>UX Design</label>
                        </div>
                        <div>
                            <input type="radio" name="radiobutton" v-model="r" value="4" @change="changeFilter">
                            <label>Web Development</label>
                        </div>
                        <div>
                            <input type="radio" name="radiobutton" v-model="r" value="5" @change="changeFilter">
                            <label>Marketing</label>
                        </div>
                    </v-radio-group>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>
export default {
    methods: {
        changeFilter(e) {
            this.$store.dispatch('setFilter', e.target.value);
        },
        defaultFilter() {
            this.$store.dispatch('setFilter', 0)
        }
    },
    created() {
        this.defaultFilter()
    }
}
</script>

<style scoped>
input {
    margin: .4rem;
    color: #F9A825;
}
</style>