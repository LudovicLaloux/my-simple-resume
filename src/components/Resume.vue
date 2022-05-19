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
        .leftSide {
            width: 30%;
            height: 100%;
        }
        .rightSide {
            width: 70%;
            height: 100%;
        }
    }
</style>