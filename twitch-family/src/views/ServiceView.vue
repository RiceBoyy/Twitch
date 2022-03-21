<template>
    <div class="cu-container">
        <ChallengeUser />
    </div>
    <div class="sb-container">
        <ScoreBoard />
    </div>
    <div class="ru-container">
        <RewardUser />
    </div>
</template>

<script>
import ChallengeUser from '@/components/ChallengeUser.vue';
import RewardUser from '@/components/RewardUser.vue';
import ScoreBoard from '@/components/ScoreBoard.vue';

export default {
    name: 'ServiceView',
    components: {
        ChallengeUser,
        RewardUser,
        ScoreBoard
    }
}
</script>