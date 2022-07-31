<template>
  <div>
    <div v-for="(question, index) in questions" :key="index">
      <div v-if="currentQuestion === index">
        <question-card
          @checked="selectOption"
          :index="index"
          :question="question"
        />
      </div>
    </div>
    <div class="buttons">
      <button-component
        v-if="currentQuestion !== 0"
        @clicked="goToPrev"
        :style="'Danger'"
        :value="'Prev'"
      />
      <button-component
        v-if="currentQuestion !== questions.length - 1"
        @clicked="goToNext"
        :value="'Next'"
        :style="'Success'"
      />
      <button-component
        v-if="currentQuestion === questions.length - 1"
        @clicked="finishQuiz"
        :value="'Finish'"
        :style="'Success'"
      />
    </div>
  </div>
</template>

<script>
import ButtonComponent from "../components/ButtonComponent.vue";
import QuestionCard from "../components/QuestionCard.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    ButtonComponent,
    QuestionCard,
  },
  data() {
    return {
      currentQuestion: 0,
    };
  },
  computed: {
    score() {
      return this.questions.filter(
        (question) => question.chosenAnswer === question.correct_answer
      );
    },
    ...mapGetters(["questions"]),
  },

  methods: {
    ...mapActions(["loadQuestions"]),
    finishQuiz() {
      this.$router.push({
        name: "Score",
        params: {
          userscore: this.score.length,
        },
      });
    },
    selectOption(params) {
      this.questions[params.qIndex].chosenAnswer = params.value;
    },
    goToNext() {
      this.currentQuestion += 1;
    },
    goToPrev() {
      this.currentQuestion -= 1;
    },
  },
  mounted: function () {
    this.loadQuestions();
  },
};
</script>

<style lang="scss" scoped>
.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>
