<template>
    <div id="profile">
        <profile-card 
            :profile="profile"
            style="width: 300px;" />
        <el-button 
            type="danger"
            style="margin-top: 10px; width: 300px; font-weight: 700; font-size: 16px;"
            @click="handleLogoutButtonClickedAsync">
            로그아웃
        </el-button>
    </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import { getMeAsync, IGetMeResponse, logoutAsync } from '@/lib/api';
import ProfileCard from '@/components/profile/profile-card.vue';
import { clearAuth } from '@/lib/auth';
import { MessageBox, Message } from 'element-ui';

@Component({
    components: {
        ProfileCard,
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

        await MessageBox.confirm('로그아웃하시겠어요?', '로그아웃', {
            confirmButtonText: '로그아웃',
            cancelButtonText: '취소',
        });

        await logoutAsync();
        clearAuth();

        Message.success('로그아웃되었습니다. :)');

        this.$router.replace({ name: 'login' });

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