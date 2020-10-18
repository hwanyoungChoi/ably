<template>
    <el-card
        shadow="never"
        body-style="padding: 0;">
        <el-image
            :src="profile.profileImage"
            style="width: 100%; height: auto;" />
        <div style="padding: 15px;">
            <div id="name">{{ profile.name }}</div>
            <div id="email">{{ profile.email }}</div>
            <div id="last-connected-at">
                마지막 접속 시간{{ profile.lastConnectedAt | toDateString }}
            </div>
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
    #name {
        font-weight: 700;
    }

    #email {
        font-weight: 600;
        font-size: 14px;
        margin-top: 3px;
        color: gray;
    }

    #last-connected-at {
        font-weight: 500;
        font-size: 13px;
        margin-top: 5px;
        color: darkgray;
    }
</style>