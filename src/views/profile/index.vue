<template>
    <div id="profile">
        <user-profile-card :profile="profile" />
        <el-button 
            type="danger"
            @click="handleLogoutButtonClickedAsync">
            로그아웃
        </el-button>
    </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import { getMeAsync, IGetMeResponse, logoutAsync } from '@/lib/api';
import UserProfileCard from '@/components/profile/user-profile-card.vue';

@Component({
    components: {
        UserProfileCard,
    },
})
export default class Profile extends Vue {

    // Properties
    private profile: IGetMeResponse = {
        name: '',
        email: '',
        profileImage: '',
        lastConnectedAt: new Date(),
    };

    // Lifecycle
    private async created() {

        const data = await getMeAsync();

        this.profile = data;

    }

    // Methods
    private async handleLogoutButtonClickedAsync() {

        await logoutAsync();

        sessionStorage.removeItem('accessToken');

        this.$router.replace({ path: '/' });

    }

}

</script>

<style scoped>
    #profile {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>