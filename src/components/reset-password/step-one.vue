<template>
    <el-form
        ref="form"
        :model="stepOneForm">
        <el-form-item label="이메일">
            <el-input 
                v-model="stepOneForm.email" 
                placeholder="ably247@bar.com" />
        </el-form-item>
        <el-form-item>
            <el-button
                type="primary"
                style="width: 100%; font-weight: 700; font-size: 16px;"
                @click="handleNextButtonClicked">
                다음
            </el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts">

import { Component, Vue, Emit } from 'vue-property-decorator';

interface IStepOneForm {
    email: string;
}

@Component
export default class StepOne extends Vue {

    // Properties
    private stepOneForm: IStepOneForm = {
        email: '',
    };

    // Emits
    @Emit('on-next')
    private handleNextButtonClicked() {

        if (this.validateStepOneForm()) {
            return this.stepOneForm.email;
        }

    }

    // Methods
    private validateStepOneForm(): boolean {

        if (!this.stepOneForm.email.trim()) {
            alert('이메일을 입력해주세요.');
            return false;
        }

        return true;

    }

}

</script>

<style scoped>

</style>