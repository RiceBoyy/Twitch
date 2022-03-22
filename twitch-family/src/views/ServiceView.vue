<template>
    <div class="sv-container">
        <div class="sv-wrapper">
            <div class="cu-container">
                <ChallengeUser />
            </div>
            <div class="sb-container">
                <ScoreBoard />
            </div>
            <div class="uu-container">
                <h1>To update Challengers point go here...</h1>
                <router-link to="/userUpdate">Update Challenger</router-link>
            </div>
            <div class="ru-container">
                <RewardUser />
            </div>
        </div>
    </div>
</template>

<script>
import ChallengeUser from '@/components/ChallengeUser.vue';
import RewardUser from '@/components/RewardUser.vue';
import ScoreBoard from '@/components/ScoreBoard.vue';
import UpdateUser from '@/components/UpdateUser.vue';

export default {
    name: 'ServiceView',
    components: {
        ChallengeUser,
        RewardUser,
        ScoreBoard,
        UpdateUser
    }
}
</script>

<style lang="scss" scoped>
.sv-container {
    background-color: var(--bg-color);
}

.uu-container {
    text-align: center;
    padding: var(--box-all);
    h1 {
        padding: var(--box-p-ud);
        color: #fff;
    }
    a {
        background-color: #fff;
        border: #fff solid;
        border-radius: 5px;
        text-decoration: none;
        color: var(--main-2-color);
    }
}
</style>