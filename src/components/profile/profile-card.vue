<template>
    <el-card 
        shadow="never"
        body-style="padding: 0;"
        style="width: 320px;">
        <el-image
            :src="profile.profileImage" 
            style="width: 100%; height: auto;">
            <div slot="placeholder" style="width: 100%; height: auto">
                Loading...
            </div>
        </el-image>
        <div style="padding: 15px;">
            <div>{{ profile.name }}</div>
            <div>{{ profile.email }}</div>
            <div>{{ profile.lastConnectedAt | toDateString }}</div>
        </div>
    </el-card>
</template>

<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator';
import { IGetMeResponse } from '@/lib/api';
import { toDateString } from '@/lib/util';

@Component({
    filters: {
        toDateString,
    },
})
export default class ProfileCard extends Vue {

    // Props
    @Prop({ required: true })
    private readonly profile!: IGetMeResponse;

}

</script>

<style scoped>

</style>