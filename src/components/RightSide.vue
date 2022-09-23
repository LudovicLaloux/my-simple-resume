<template>
    <div class="RightSide">
        <div class="rightSideWrapper">
            <rightside-skills></rightside-skills>
            <rightside-exp></rightside-exp>
            <rightside-educ></rightside-educ>
        </div>
    </div>
</template>

<script>
import RightsideSkills from "./RightsideSkills"
import RightsideExp from "./RightsideExp"
import RightsideEduc from "./RightsideEduc"

export default {
    name: "right-side",
    components: {
        RightsideSkills,
        RightsideExp,
        RightsideEduc
    }
};
</script>

<style lang="scss">
.RightSide {
    color: rgba(75, 75, 75, 0.8);
    .rightSideWrapper {
        padding-top: 17px;
        padding-left: 17px;
        padding-right: 17px;
        .leftLine {
            .leftLineSquare {
                content: "";
                background: rgba(75, 75, 75, 0.8);
                border-radius: 10%;
                width: 10px;
                height: 10px;
            }
            .leftLineDelimiter {
                margin-top: 5px;
                border-right: 3px solid rgba(75, 75, 75, 0.8);
                height: 100%;
                width: 3px;
            }
        }
        .list {
            .listCompany {
                font-size: 18px;
                font-weight: 600;
            }
        }
    }
}
.header {
    .headerIcon {
        border: 3px solid rgba(75, 75, 75, 0.8);
        border-radius: 50%;
        &.graduationCap {
            padding: 7px;
        }
    }
    .headerTitle {
        font-size: 20px;
        font-weight: 600;
    }
}
.theme--light.v-divider {
    border-color: #00796b;
}
</style>