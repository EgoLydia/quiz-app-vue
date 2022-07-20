<template>
  <div id="quest-card">
    <h3>Question {{ index }}</h3>
    <p>{{ question.question }}</p>
    <div class="options">
      <options-comp
        :question="question.question"
        :value="option"
        :index="index"
        v-for="(option, index) in questionOptions"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import OptionsComp from "./OptionsComponent.vue";
export default {
  components: {
    OptionsComp,
  },
  props: {
    index: {
      default: 0,
      type: Number,
    },
    question: {
      default: {
        question: "who owns you?",
        incorrect_answers: ["You", "Yourself", "Yours"],
        correct_answer: "Us",
      },
    },
  },
  computed: {
    questionOptions() {
      return [...this.question.incorrect_answers, this.question.correct_answer];
    },
  },
};
</script>

<style></style>
