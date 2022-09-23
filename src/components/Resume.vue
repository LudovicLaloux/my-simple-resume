<template>
    <div class="MySimpleResume">
        <left-side></left-side>
        <right-side></right-side>
    </div>
</template>

<script>
import LeftSide from './LeftSide.vue';
import RightSide from './RightSide.vue';

export default {
    name: "my-simple-resume",
    components: {
        LeftSide, 
        RightSide
    }
};
</script>

<style scoped lang="scss">
    .MySimpleResume {
        height: 1170px;
        width: 827px;
        display: flex;
        .LeftSide {
            min-width: 249px;
            max-width: 249px;
            height: 100%;
        }
        .RightSide {
            min-width: 578px;
            max-width: 578px;
            height: 100%;
        }
    }
</style>