<template>
    <el-form
        ref="form"
        :model="stepThreeForm">
        <el-form-item label="이메일">
            <el-input 
                v-model="stepThreeForm.email"
                disabled />
        </el-form-item>
        <el-form-item label="새 비밀번호">
            <el-input
                v-model="stepThreeForm.newPassword"
                placeholder="새 비밀번호 입력"
                show-password />
        </el-form-item>
        <el-form-item label="새 비밀번호 확인">
            <el-input
                v-model="stepThreeForm.newPasswordConfirm"
                placeholder="새 비밀번호 재입력"
                show-password />
        </el-form-item>
        <el-form-item>
            <el-button
                type="primary"
                style="width: 100%; font-weight: 700; font-size: 16px;"
                @click="handleChangePasswordButtonClicked">
                변경하기
            </el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts">

import { Component, Vue, Emit, Prop } from 'vue-property-decorator';

export interface IStepThreeForm {
    email: string;
    newPassword: string;
    newPasswordConfirm: string;
}

@Component
export default class StepThree extends Vue {

    // Props
    @Prop({ required: true })
    private readonly email!: string;

    // Properties
    private stepThreeForm: IStepThreeForm = {
        email: '',
        newPassword: '',
        newPasswordConfirm: '',
    };

    // Emits
    @Emit('on-change')
    private handleChangePasswordButtonClicked() {

        if (this.validateStepThreeForm()) {
            return this.stepThreeForm;
        }

    }

    // Lifecycle
    private created() {

        this.stepThreeForm.email = this.email;

    }

    // Methods
    private validateStepThreeForm(): boolean {

        if (this.stepThreeForm.newPassword !== this.stepThreeForm.newPasswordConfirm) {
            alert('입력한 비밀번호가 서로 일치하지 않습니다.');
            return false;
        }

        return true;

    }

}

</script>

<style scoped>

</style>