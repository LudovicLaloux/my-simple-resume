<template>
    <div class="RightSide">
        <div class="rightSideWrapper">
            <div class="header">
                <div class="headerIcon">
                    <v-icon small>fa-code</v-icon>
                </div>
                <div class="headerTitle">
                    <span>{{ $t('rightside.skills.title') }}</span>
                </div>
                <div class="headerDelimiter"></div>
            </div>
            <div class="skills">
                <div class="leftLine">
                    <div class="leftLineSquare"></div>
                    <div class="leftLineDelimiter"></div>
                </div>
                <div class="skillItem">
                    <div class="skillTitle">
                        <span>{{ $t('rightside.skills.html') }}</span>
                    </div>
                    <div class="skillLogo">
                        <img src="../assets/html.png" width="28"/>
                    </div>
                </div>
                <div class="skillItem">
                    <div class="skillTitle">
                        <span>{{ $t('rightside.skills.python') }}</span>
                    </div>
                    <div class="skillLogo">
                        <img src="../assets/python.png" width="28"/>
                    </div>
                </div>
                <div class="skillItem">
                    <div class="skillTitle">
                        <span>{{ $t('rightside.skills.javascript') }}</span>
                    </div>
                    <div class="skillLogo">
                        <img src="../assets/javascript.png" width="28"/>
                    </div>
                </div>
                <div class="skillItem">
                    <div class="skillTitle">
                        <span>{{ $t('rightside.skills.django') }}</span>
                    </div>
                    <div class="skillLogo">
                        <img src="../assets/django.jpeg" width="28"/>
                    </div>
                </div>
                <div class="skillItem">
                    <div class="skillTitle">
                        <span>{{ $t('rightside.skills.vuejs') }}</span>
                    </div>
                    <div class="skillLogo">
                        <img src="../assets/vue.png" width="28"/>
                    </div>
                </div>                
                <div class="skillItem">
                    <div class="skillTitle">
                        <span>{{ $t('rightside.skills.webpack') }}</span>
                    </div>
                    <div class="skillLogo">
                        <img src="../assets/webpack.png" width="28"/>
                    </div>
                </div>
                <div class="skillItem">
                    <div class="skillTitle">
                        <span>{{ $t('rightside.skills.react') }}</span>
                    </div>
                    <div class="skillLogo">
                        <img src="../assets/react.png" width="28"/>
                    </div>
                </div>
                <div class="skillItem">
                    <div class="skillTitle">
                        <span>{{ $t('rightside.skills.git') }}</span>
                    </div>
                    <div class="skillLogo">
                        <img src="../assets/git.png" width="28"/>
                    </div>
                </div>      
                <div class="skillItem">
                    <div class="skillTitle">
                        <span>{{ $t('rightside.skills.project.personal') }}</span>
                    </div>
                </div>  
                <div class="skillItem project">
                    <div class="skillTitle">
                        <img src="../assets/github.png" width="22"/>
                        <span class="project-title">{{ $t('rightside.skills.project.github') }}</span>
                    </div>
                </div> 
                <div class="skillItem">
                    <div class="skillTitle">
                        <span>{{ $t('rightside.skills.project.animation') }}</span>
                    </div>
                </div>
                <div class="skillItem project">
                    <div class="skillTitle">
                        <img src="../assets/codepen.png" width="22"/>
                        <span class="project-title">{{ $t('rightside.skills.project.codepen') }}</span>
                    </div>
                </div> 
            </div>
            <div class="header">
                <div class="headerIcon">
                    <!-- <font-awesome-icon size="2x" icon="briefcase"/> -->
                    <v-icon small>fa-briefcase</v-icon>
                </div>
                <div class="headerTitle">
                    <span>{{ $t('rightside.employment.title') }}</span>
                </div>
                <div class="headerDelimiter"></div>
            </div>
            <div class="list employment">
                <div class="leftLine">
                    <div class="leftLineSquare"></div>
                    <div class="leftLineDelimiter"></div>
                </div>
                <div class="listItem">
                    <p class="listDate">{{ $t('rightside.employment.guidap.date') }}</p>
                    <p class="listCompany">{{ $t('rightside.employment.guidap.company') }}</p>
                    <p class="listJob">{{ $t('rightside.employment.guidap.job') }}</p>
                    <p class="listDescription">{{ $t('rightside.employment.guidap.description1') }}</p>
                    <p class="listDescription">{{ $t('rightside.employment.guidap.description2') }}</p>
                    <p class="listDescription">{{ $t('rightside.employment.guidap.description3') }}</p>
                    <p class="listDescription">{{ $t('rightside.employment.guidap.description4') }}</p>
                    <p class="listDescription">{{ $t('rightside.employment.guidap.description5') }}</p>
                    <p class="listDescription">{{ $t('rightside.employment.guidap.description6') }}</p>
                    <p class="listDescription">{{ $t('rightside.employment.guidap.description7') }}</p>
                </div>
                <div class="leftLine">
                    <div class="leftLineSquare"></div>
                    <div class="leftLineDelimiter"></div>
                </div>
                <div class="listItem">
                    <p class="listDate">{{ $t('rightside.employment.inp.date') }}</p>
                    <p class="listCompany">{{ $t('rightside.employment.inp.company') }}</p>
                    <p class="listJob">{{ $t('rightside.employment.inp.job') }}</p>
                    <p class="listDescription">{{ $t('rightside.employment.inp.description1') }}</p>
                    <p class="listDescription">{{ $t('rightside.employment.inp.description2') }}</p>
                </div>
                <div class="leftLine">
                    <div class="leftLineSquare"></div>
                    <div class="leftLineDelimiter"></div>
                </div>
                <div class="listItem">
                    <p class="listDate">{{ $t('rightside.employment.ifi.date') }}</p>
                    <p class="listCompany">{{ $t('rightside.employment.ifi.company') }}</p>
                    <p class="listJob">{{ $t('rightside.employment.ifi.job') }}</p>
                    <p class="listDescription">{{ $t('rightside.employment.ifi.description1') }}</p>
                    <p class="listDescription">{{ $t('rightside.employment.ifi.description2') }}</p>
                </div>
            </div>
            <div class="header">
                <div class="headerIcon graduationCap">
                    <v-icon small>fa-graduation-cap</v-icon>
                </div>
                <div class="headerTitle">
                    <span>{{ $t('rightside.education.title') }}</span>
                </div>
                <div class="headerDelimiter"></div>
            </div>
            <div class="list education">
                <div class="leftLine">
                    <div class="leftLineSquare"></div>
                    <div class="leftLineDelimiter"></div>
                </div>
                <div class="listItem">
                    <p class="listDate">{{ $t('rightside.education.fullstack.date') }}</p>
                    <p class="listCompany">{{ $t('rightside.education.fullstack.school') }}</p>
                    <p class="listJob">{{ $t('rightside.education.fullstack.degree') }}</p>
                    <p class="listDescription">{{ $t('rightside.education.fullstack.description') }}</p>
                </div>
                <div class="leftLine">
                    <div class="leftLineSquare"></div>
                    <div class="leftLineDelimiter"></div>
                </div>
                <div class="listItem">
                    <p class="listDate">{{ $t('rightside.education.fle.date') }}</p>
                    <p class="listCompany">{{ $t('rightside.education.fle.school') }}</p>
                    <p class="listJob">{{ $t('rightside.education.fle.degree') }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "right-side",
    };
</script>

<style scoped lang="scss">
    .RightSide {
        color: rgba(75, 75, 75, 0.8);
        .rightSideWrapper {
            padding: 15px 25px;
            .header {
                display: flex;
                margin-top: 10px;
                .headerIcon {
                    border: 3px solid rgba(75, 75, 75, 0.8);
                    border-radius: 50%;
                    padding: 8px;
                    margin-right: 15px;
                    &.graduationCap {
                        padding: 7px;
                    }
                }
                .headerTitle {
                    font-size: 20px;
                    font-weight: 600;
                    margin-top: 12px;
                }
                .headerDelimiter {
                    border-bottom: 3px solid rgba(75, 75, 75, 0.8);
                    width: 100%;
                    margin: 0 0px 26px 17px
                }
            }
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
                    height: 90%;
                    width: 3px;
                }
            }
            .skills {
                margin: 5px 0 10px 20px;
                display: grid;
                grid-template-columns: 20px 230px 230px;
                grid-template-rows: 30px 30px 30px 30px 35px;
                .leftLine {
                    grid-row-start: 1;
                    grid-row-end: 7;
                    padding-top: 16px;
                }
                .skillItem {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .skillTitle {
                        padding-left: 20px;
                    }
                    .skillLogo {
                        padding-right: 12px;
                    }
                    &.project {
                        margin-left: -56px;
                        .project-title {
                            margin-left: 16px;
                        }
                        .skillTitle {
                            display: flex;
                        }
                    }
                }
            }
            .list {
                margin: 0px 0 20px 20px;
                display: grid;
                grid-template-columns: 20px auto;
                grid-template-rows: 50px 50px;
                .leftLine {
                    padding-top: 14px;
                }
                .listItem {
                    padding-left: 20px;
                    padding-top: 8px;
                    .listDate {
                        margin-top: 0;
                        margin-bottom: 5px;
                    }
                    .listCompany {
                        margin-top: 0;
                        margin-bottom: 5px;
                        font-size: 18px;
                        font-weight: 600;
                    }
                    .listJob {
                        margin-top: 0;
                        margin-bottom: 5px;
                        font-weight: 600;
                    }
                    .listDescription {
                        margin: 0;
                    }
                    ul {
                        margin-top: 6px;
                        margin-bottom: 6px;
                        padding-left: 24px;
                    }
                }
            }
            .employment {
                display: grid;
                grid-template-columns: 20px auto;
                grid-template-rows: 260px 162px 124px;
            }
            .education {
                display: grid;
                grid-template-columns: 20px auto;
                grid-template-rows: 142px 72px;
            }
        }
    }
</style>