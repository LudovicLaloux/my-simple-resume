<template>
    <div class="RightsideSkills">
        <!-- skills header -->
        <div class="header d-flex align-center mb-2">
            <v-btn outlined icon color="teal darken-2" class="mr-2"><v-icon small>fa-code</v-icon></v-btn>
            <span class="headerTitle mr-2 teal--text text--darken-2">{{ $t('rightside.skills.title') }}</span>
            <v-divider></v-divider>
        </div>
        <!-- skills content -->
        <div class="skills py-2 pl-3 mb-2">
            <v-row no-gutters>
                <v-col cols="3">
                    <span><b>Frontend :</b></span>
                </v-col>
                <v-col cols="3">
                    <div class="d-flex align-center">
                        <img class="mr-2" src="../assets/vue.png" width="28"/>
                        <span>{{ $t('rightside.skills.vuejs') }}</span>
                    </div>
                </v-col>
                <v-col cols="3">
                    <div class="d-flex align-center">
                        <img class="mr-2" src="../assets/vuetify.png" width="28"/>
                        <span>{{ $t('rightside.skills.vuetify') }}</span>
                    </div>
                </v-col>
                <v-col cols="3">
                    <div class="d-flex align-center">
                        <img class="mr-2" src="../assets/react.png" width="28"/>
                        <span>{{ $t('rightside.skills.react') }}</span>
                    </div>
                </v-col>
            </v-row>
            <v-row no-gutters class="mt-1">
                <v-col cols="3">
                    <span><b>Backend :</b></span>
                </v-col>
                <v-col cols="3">
                    <div class="d-flex align-center">
                        <img class="mr-2" src="../assets/nestjs.png" width="28"/>
                        <span>{{ $t('rightside.skills.nestJs') }}</span>
                    </div>
                </v-col>
                <v-col cols="3">
                    <div class="d-flex align-center">
                        <img class="mr-2" src="../assets/node.png" width="28"/>
                        <span>{{ $t('rightside.skills.expressJs') }}</span>
                    </div>
                </v-col>
                <v-col cols="3">
                    <div class="d-flex align-center">
                        <img class="mr-2" src="../assets/python.png" width="28"/>
                        <span>{{ $t('rightside.skills.python') }}</span>
                    </div>
                </v-col>
            </v-row>
            <v-row no-gutters class="mt-1">
                <v-col cols="3">
                    <span><b>BDD :</b></span>
                </v-col>
                <v-col cols="3">
                    <div class="d-flex align-center">
                        <img class="mr-2" src="../assets/mysql.png" width="28"/>
                        <span>{{ $t('rightside.skills.mysql') }}</span>
                    </div>
                </v-col>
                <v-col cols="3">
                    <div class="d-flex align-center">
                        <img class="mr-2" src="../assets/sqlite.png" width="28"/>
                        <span>{{ $t('rightside.skills.sqlite') }}</span>
                    </div>
                </v-col>
                <v-col cols="3">
                    <div class="d-flex align-center">
                        <img class="mr-2" src="../assets/mongodb.png" width="28"/>
                        <span>{{ $t('rightside.skills.mongoDb') }}</span>
                    </div>
                </v-col>
            </v-row>
            <v-row no-gutters class="mt-1">
                <v-col cols="3">
                    <span><b>Testing :</b></span>
                </v-col>
                <v-col cols="3">
                    <div class="d-flex align-center">
                        <img class="mr-2" src="../assets/jest.png" width="28"/>
                        <span>{{ $t('rightside.skills.jest') }}</span>
                    </div>
                </v-col>
                <v-col cols="3">
                    <div class="d-flex align-center">
                        <img class="mr-2" src="../assets/cypress.png" width="28"/>
                        <span>{{ $t('rightside.skills.cypress') }}</span>
                    </div>
                </v-col>
            </v-row>
            <v-row no-gutters class="mt-1">
                <v-col cols="3">
                    <span><b>Autres :</b></span>
                </v-col>
                <v-col cols="9" class="mt-1">
                    <div class="d-flex align-center justify-center">
                        <img class="mr-2" src="../assets/secu.png" width="26"/>
                        <span class="secuSkill">{{ $t('rightside.skills.security') }}</span>
                    </div>
                </v-col>
            </v-row>
        </div>
    </div>
</template>
<script>
export default {
    name:"rightside-skills"
}
</script>
<style>
    .secuSkill {
        line-height: 0.9;
    }
</style>