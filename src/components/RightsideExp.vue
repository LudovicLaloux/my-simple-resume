<template>
    <div class="RightsideExp">
        <!-- employment header -->
        <div class="header d-flex align-center justify-center">
            <v-btn outlined icon color="teal darken-2" class="mr-2"><v-icon small>fa-briefcase</v-icon></v-btn>
            <span class="headerTitle mr-2 teal--text text--darken-2">{{ $t('rightside.employment.title') }}</span>
            <v-divider></v-divider>
        </div>
        <!-- employment content -->
        <div class="list employment">
            <!-- June Factory -->
            <div class="d-flex mt-1">
                <!-- left line  -->
                <div class="d-flex mt-2">
                    <div class="leftLine ml-3 d-flex flex-column align-center">
                        <div class="leftLineSquare"></div>
                        <div class="leftLineDelimiter"></div>
                    </div>
                </div>
                <!-- content -->
                <div class="ml-3">
                    <b><p class="mb-0 ml-1">{{ $t('rightside.employment.june.date') }}</p>
                    <span class="listCompany">{{ $t('rightside.employment.june.company') }}</span> - <i><span>{{ $t('rightside.employment.june.job') }}</span></i></b><br>
                    <span><i>Stack technique :</i>{{ $t('rightside.employment.june.stack') }}</span>
                    <ul>
                        <li>{{ $t('rightside.employment.june.description1') }}</li>
                        <li>{{ $t('rightside.employment.june.description2') }}</li>
                        <li>{{ $t('rightside.employment.june.challenge1') }}</li>
                        <li>{{ $t('rightside.employment.june.challenge2') }}</li>
                    </ul>
                </div>
            </div>
            <!-- Guidap -->
            <div class="d-flex mt-2">
                <!-- left line  -->
                <div class="d-flex mt-2">
                    <div class="leftLine ml-3 d-flex flex-column align-center">
                        <div class="leftLineSquare"></div>
                        <div class="leftLineDelimiter"></div>
                    </div>
                </div>
                <!-- content -->
                <div class="ml-3">
                    <b><span class="dateText">{{ $t('rightside.employment.guidap.date') }}</span><br>
                    <span class="listCompany">{{ $t('rightside.employment.guidap.company') }}</span> - <i><span>{{ $t('rightside.employment.guidap.job') }}</span></i><br></b>
                    <span><i>Stack technique :</i>{{ $t('rightside.employment.guidap.stack') }}</span>
                    <ul>
                        <li>{{ $t('rightside.employment.guidap.description1') }}</li>
                        <li>{{ $t('rightside.employment.guidap.description2') }}</li>
                        <li>{{ $t('rightside.employment.guidap.description3') }}</li>
                        <li>{{ $t('rightside.employment.guidap.description4') }}</li>
                        <li>{{ $t('rightside.employment.guidap.description5') }}</li>
                    </ul>
                </div>
            </div>
            <!-- INP -->
            <div class="d-flex mt-2">
                <!-- left line  -->
                <div class="d-flex mt-2">
                    <div class="leftLine ml-3 d-flex flex-column align-center">
                        <div class="leftLineSquare"></div>
                        <div class="leftLineDelimiter"></div>
                    </div>
                </div>
                <!-- content -->
                <div class="ml-3">
                    <b><p class="mb-0 ml-1">{{ $t('rightside.employment.inp.date') }}</p>
                    <span class="listCompany">{{ $t('rightside.employment.inp.company') }}</span> - <i><span>{{ $t('rightside.employment.inp.job') }}</span></i></b><br>
                    <span>{{ $t('rightside.employment.inp.description1') }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"rightside-exp"
}
</script>
<style lang="scss" scoped>
</style>