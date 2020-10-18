<template>
    <div id="login">
        <el-card
            shadow="never"
            style="width: 320px;"
            body-style="padding-bottom: 0;">
            <el-form 
                ref="form" 
                :model="loginForm" 
                style="text-align: center;">
                <el-form-item label="이메일">
                    <el-input 
                        v-model="loginForm.email" 
                        placeholder="ably247@bar.com"
                        autofocus />
                </el-form-item>
                <el-form-item label="비밀번호">
                    <el-input 
                        v-model="loginForm.password" 
                        placeholder="비밀번호 입력"
                        clearable
                        show-password />
                </el-form-item>
                <el-form-item>
                    <el-button 
                        type="primary" 
                        style="width: 100%; font-weight: 700; font-size: 16px;"
                        @click="handleLoginButtonClickedAsync">
                        로그인
                    </el-button>
                    <el-button 
                        type="text" 
                        style="color: darkgray; padding: 0;" 
                        @click="handleResetPasswordButtonClicked">
                        비밀번호 재설정
                    </el-button>
                </el-form-item>
                <el-form-item>
                    <el-button
                        style="width: 100%; font-weight: 700; font-size: 16px;"
                        @click="handleRegisterEmailButtonClicked">
                        이메일로 가입하기
                    </el-button>
                </el-form-item>
            </el-form>
        </el-card>
        
    </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import { ILoginRequest, loginAsync, IGetMeResponse, getMeAsync } from '@/lib/api';
import { setAccessToken } from '@/lib/auth';
import { Message } from 'element-ui';

interface ILoginForm {
    email: string;
    password: string;
}

@Component
export default class Login extends Vue {

    // Properties
    private loginForm: ILoginForm = {
        email: '',
        password: '',
    };

    // Methods
    private async handleLoginButtonClickedAsync() {

        if (!this.validateLoginForm()) {
            return;
        }

        const params: ILoginRequest = this.loginForm;
        const { accessToken } = await loginAsync(params);

        setAccessToken(accessToken);

        Message.success('로그인되었습니다.');

        this.$router.replace({ name: 'profile' });

    }

    private handleRegisterEmailButtonClicked() {

        alert('아직 제공되지 않는 기능입니다. :)');

    }

    private handleResetPasswordButtonClicked() {

        this.$router.push({ name: 'reset-password' });

    }

    private validateLoginForm(): boolean {

        if (!this.loginForm.email.trim() || !this.loginForm.password) {
            Message.error('정확한 이메일과 비밀번호를 입력해주세요.');
            return false;
        }

        return true;

    }

}

</script>

<style scoped>
    #login {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>