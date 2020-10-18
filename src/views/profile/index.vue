<template>
    <div id="profile">
        프로필
    </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import { getMeAsync, IGetMeResponse } from '@/lib/api';

@Component
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

}

</script>