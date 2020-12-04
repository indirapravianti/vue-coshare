<template>
    <div>
        <v-sheet v-if="$vuetify.breakpoint.smAndUp"  class="mt-4 pa-8">
            <h3>Top Categories</h3>
            <v-radio-group :mandatory="true">
                <v-radio v-for="(category, i) in categories" :key="i" :label="category" :value="i">

                </v-radio>
            </v-radio-group>
        </v-sheet>
        <v-expansion-panels v-else>
            <v-expansion-panel>
                <v-expansion-panel-header>
                    Top Categories
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-radio-group :mandatory="true">
                        <v-radio v-for="(category, i) in categories" :key="i" :label="category" :value="i">

                        </v-radio>
                    </v-radio-group>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categories: [
                'Programming',
                'Data Science',
                'UX Design',
                'Web Development',
                'Marketing'
            ],
            checkbox: true
        }
    }
}
</script>