<template>    
    <div class="LeftSide">
        <div class="pictureFrame mx-auto mt-8 mb-6">
            <div class="picture">
            </div>
        </div>
        <div class="name text-center mt-2 mx-2">
            {{ $t('profile.name') }}
        </div>
        <div class="jobTitle py-2 text-center">
            {{ $t('profile.title1') }}<br>
            {{ $t('profile.title2') }}
        </div>
        <div class="description mt-10">
            <div class="profileHeader ml-6 mb-2 d-flex align-center">
                <v-icon class="mr-4" color="white">fa-user</v-icon>
                <span>{{ $t('profile.description.title') }}</span>
            </div>
            <div class="descriptionContent px-3">
                <p>{{ $t('profile.description.content') }}</p>
            </div>
        </div>
        <div class="contact mt-14">
            <div class="profileHeader ml-6 mb-2 d-flex align-center">
                <v-icon class="mr-4" color="white">fa-address-book</v-icon>
                <span>{{ $t('profile.contact.title') }}</span>
            </div>
            <div class="px-3">
                <div class="mb-1">
                    <v-icon class="mr-2" small color="white">fa-envelope</v-icon>
                    <span>{{ $t('profile.contact.mail') }}</span>
                </div>
                <div class="mb-1">
                    <v-icon class="mr-2" small color="white">fa-phone</v-icon>
                    <span>{{ $t('profile.contact.phone') }}</span>
                </div>
                <div class="mb-1">
                    <v-icon class="mr-2" small color="white">fa-map</v-icon>
                    <span>{{ $t('profile.contact.address') }}</span>
                </div>
                <div class="mb-1">
                    <v-icon class="mr-2" small color="white">fa-brands fa-github</v-icon>
                    <span>{{ $t('profile.contact.github') }}</span>
                </div>
                <div class="mb-1">
                    <v-icon class="mr-2" small color="white">fa-brands fa-gitlab</v-icon>
                    <span>{{ $t('profile.contact.gitlab') }}</span>
                </div>
                <div class="mb-1">
                    <v-icon class="mr-2" small color="white">fa-brands fa-codepen</v-icon>
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
        .name {
            font-weight: 600;
            font-size: 35px;
            border-bottom: solid 4px white;
            padding-bottom: 8px;
            line-height: 1.1;
        }
        .jobTitle {
            font-weight: 400;
            font-size: 30px;
        }
        .profileHeader {
            font-size: 1.2em;
            font-weight: 600;
        }
        .descriptionContent {
            font-size: 1.1em;
            text-align: left;
            p {
                text-align: justify;
                text-justify: auto;
            }
        }
    }
</style>
