<template>
    <div class="RightsideEduc mt-1">
        <!-- education header -->
        <div class="header d-flex align-center justify-center">
            <v-btn outlined icon color="teal darken-2" class="mr-2"><v-icon small>fa-graduation-cap</v-icon></v-btn>
            <span class="headerTitle mr-2 teal--text text--darken-2">{{ $t('rightside.education.title') }}</span>
            <v-divider></v-divider>
        </div>
        <!-- DU fullstack -->
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
                <b><p class="mb-0 ml-1">{{ $t('rightside.education.fullstack.date') }}</p>
                <span class="listCompany">{{ $t('rightside.education.fullstack.school') }}</span> - <i><span>{{ $t('rightside.education.fullstack.degree') }}</span></i></b><br>
                <span>{{ $t('rightside.education.fullstack.description') }}</span><br>
            </div>
        </div>
        <!-- Maitrise -->
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
                <b><p class="mb-0 ml-1">{{ $t('rightside.education.fle.date') }}</p>
                <span class="listCompany">{{ $t('rightside.education.fle.school') }}</span> - <i><span>{{ $t('rightside.education.fle.degree') }}</span></i></b><br>
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