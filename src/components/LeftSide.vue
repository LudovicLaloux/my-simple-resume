<template>    
    <div class="LeftSide">
        <div class="pictureFrame">
            <div class="picture">
            </div>
        </div>
        <div class="name">
            {{ $t('profile.name') }}
        </div>
        <div class="jobTitle">
            {{ $t('profile.title1') }}<br>
            {{ $t('profile.title2') }}
        </div>
        <div class="description">
            <div class="profileHeader">
                <v-icon color="white">fa-user</v-icon>
                <span class="headerTitle">{{ $t('profile.description.title') }}</span>
            </div>
            <div class="descriptionContent">
                <p>{{ $t('profile.description.content') }}</p>
            </div>
        </div>
        <div class="contact">
            <div class="profileHeader">
                <v-icon color="white">fa-address-book</v-icon>
                <span class="headerTitle">{{ $t('profile.contact.title') }}</span>
            </div>
            <div class="contactContent">
                <div class="contactItem">
                    <v-icon small color="white">fa-envelope</v-icon>
                    <span>{{ $t('profile.contact.mail') }}</span>
                </div>
                <div class="contactItem">
                    <v-icon small color="white">fa-phone</v-icon>
                    <span>{{ $t('profile.contact.phone') }}</span>
                </div>
                <div class="contactItem">
                    <v-icon small color="white">fa-map</v-icon>
                    <span>{{ $t('profile.contact.address') }}</span>
                </div>
                <div class="contactItem">
                    <v-icon small color="white">fa-brands fa-github</v-icon>
                    <span>{{ $t('profile.contact.github') }}</span>
                </div>
                <div class="contactItem">
                    <v-icon small color="white">fa-brands fa-gitlab</v-icon>
                    <span>{{ $t('profile.contact.gitlab') }}</span>
                </div>
                <div class="contactItem">
                    <v-icon small color="white">fa-brands fa-codepen</v-icon>
                    <span>{{ $t('profile.contact.codepen') }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "left-side"
    };
</script>

<style scoped lang="scss">
    .LeftSide {
        background: #6c7a89;
        color: white;
        .pictureFrame {
            border-radius: 50%;
            border: 8px solid white;
            width: 186px;
            height: 186px;
            margin-top: 30px;
            margin-left: auto; 
            margin-bottom: 22px;
            margin-right: auto;
            .picture {
                border-width: 3px;
                border-style: solid;
                border-color: rgba(75, 75, 75, 0.8);;
                border-radius: 50%;
                width: 170px;
                height: 170px;
                background-image: url("../assets/profilepicture.jpeg");
                background-size: 100%;
                background-repeat: no-repeat;
            }
        }
        .name, .jobTitle {
            text-align: center;
        }
        .name {
            font-weight: 600;
            font-size: 35px;
            border-bottom: solid 4px white;
            padding-bottom: 8px;
            margin: 0 5px;
        }
        .jobTitle {
            padding-top: 8px;
            padding-bottom: 8px;
            font-weight: 400;
            font-size: 30px;
        }
        .profileHeader {
            .headerTitle {
                font-size: 22px;
                margin-left: 15px;                    
            }
        }
        .descriptionContent {
            padding-left: 16px;
            padding-right: 18px;
            font-size: 19px;
            text-align: left;
        }
        // .contactContent {
        //     padding-top: 10px;
        //     padding-bottom: 18px;
        //     .contactItem {
        //         padding-top: 12px;
        //         padding-left: 18px;
        //         span {
        //             padding-left: 12px;
        //         }
        //     }
        // }
        // .hobbiesContent {
        //     padding-top: 10px;
        //     .hobbiesItem {
        //         display: flex;
        //         padding-top: 12px;
        //         padding-left: 16px;
        //         p {
        //             padding-left: 12px;
        //             margin: 0;
        //         }
        //     }
        // }
    }
</style>
