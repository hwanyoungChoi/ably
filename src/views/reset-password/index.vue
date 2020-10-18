<template>
    <div id="reset-password">
        <div id="title">비밀번호 재설정</div>
        <el-card
            shadow="never"
            style="width: 320px;"
            body-style="padding-bottom: 0;">
            <template v-if="!issueToken">
                <step-one @on-next="handleStepOneToStepTwoAsync" />
            </template>
            <template v-else>
                <template v-if="!confirmToken">
                    <step-two
                        :email="email"
                        @on-next="handleStepTwoToStepThreeAsync" />
                    <div :key="remainMillisecond">{{ remainMillisecond }}</div>
                </template>
                <template v-else>
                    <step-three
                        :email="email"
                        @on-change="handleChangePasswordAsync" />
                </template>
            </template>
        </el-card>
    </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import StepOne from '@/components/reset-password/step-one.vue';
import StepTwo, { IStepTwoForm } from '@/components/reset-password/step-two.vue';
import StepThree, { IStepThreeForm } from '@/components/reset-password/step-three.vue';
import {
    IAuthCodeRequest, IAuthCodeResponse, getAuthCodeAsync, IValidateAuthCodeRequest, validateAuthCodeAsync,
    IUpdatePasswordRequest, updatePasswordAsync,
} from '@/lib/api';
import { Message } from 'element-ui';

@Component({
    components: {
        StepOne,
        StepTwo,
        StepThree,
    },
})
export default class ResetPassword extends Vue {

    // Properties
    private email: string = '';
    private issueToken: string = '';
    private remainMillisecond: number = 0;
    private confirmToken: string = '';

    // Methods
    private async handleStepOneToStepTwoAsync(email: string) {

        const params: IAuthCodeRequest = { email };
        const { issueToken, remainMillisecond } = await getAuthCodeAsync(params);

        this.email = email;
        this.issueToken = issueToken;
        this.remainMillisecond = remainMillisecond;

        Message.success('인증번호를 보내드렸습니다. :)');

    }

    private async handleStepTwoToStepThreeAsync(form: IStepTwoForm) {

        const params: IValidateAuthCodeRequest = {
            issueToken: this.issueToken,
            ...form,
        };
        const { confirmToken } = await validateAuthCodeAsync(params);

        this.confirmToken = confirmToken;

        Message.success('인증되었습니다.');

    }

    private async handleChangePasswordAsync(form: IStepThreeForm) {

        const params: IUpdatePasswordRequest = {
            confirmToken: this.confirmToken,
            ...form,
        };
        await updatePasswordAsync(params);

        Message.success('비밀번호를 재설정했습니다. 변경된 비밀번호로 로그인해주세요.');

        this.$router.replace({ name: 'login' });

    }

}

</script>

<style scoped>
    #reset-password {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #title {
        padding-top: 10px;
        padding-bottom: 10px;
    }
</style>