<template>
    <el-form :model="stepTwoForm">
        <el-form-item label="이메일">
            <el-input
                v-model="stepTwoForm.email"
                disabled />
        </el-form-item>
        <el-form-item label="인증코드">
            <el-input
                v-model="stepTwoForm.authCode"
                placeholder="인증코드 입력"
                clearable />
            <div style="color: #ff5160;">
                {{ remainMillisecond | toMillisecondsTimeString }}
            </div>
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

import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import { toMillisecondsTimeString } from '@/lib/util';

export interface IStepTwoForm {
    email: string;
    authCode: string;
}

@Component({
    filters: {
        toMillisecondsTimeString,
    },
})
export default class StepTwo extends Vue {

    // Props
    @Prop({ required: true })
    private readonly email!: string;

    @Prop({ required: true })
    private readonly remainMillisecond!: number;

    // Properties
    private stepTwoForm: IStepTwoForm = {
        email: '',
        authCode: '',
    };

    // Emits
    @Emit('on-next')
    private handleNextButtonClicked() {

        if (this.validateStepTwoForm()) {
            return this.stepTwoForm;
        }

    }

    // Lifecycle
    private created() {

        this.stepTwoForm.email = this.email;

    }

    // Methods
    private validateStepTwoForm(): boolean {

        if (!this.stepTwoForm.authCode.trim()) {
            alert('인증코드를 입력해주세요.');
            return false;
        }

        if (this.stepTwoForm.authCode.length !== 6) {
            alert('인증코드는 6자리입니다.');
            return false;
        }

        return true;

    }

}

</script>

<style scoped>

</style>