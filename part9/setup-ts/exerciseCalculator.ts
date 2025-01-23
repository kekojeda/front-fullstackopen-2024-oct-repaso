// exerciseCalculator.ts

interface Result {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
  }
  
  export const calculateExercises = (dailyExercises: number[], target: number): Result => {
    const periodLength = dailyExercises.length;
    const trainingDays = dailyExercises.filter(hours => hours > 0).length;
    const average = dailyExercises.reduce((sum, hours) => sum + hours, 0) / periodLength;
    const success = average >= target;
  
    let rating: number;
    let ratingDescription: string;
  
    if (average >= target) {
      rating = 3;
      ratingDescription = 'Great job, you met your target!';
    } else if (average >= target * 0.75) {
      rating = 2;
      ratingDescription = 'Not too bad but could be better.';
    } else {
      rating = 1;
      ratingDescription = 'You need to exercise more.';
    }
  
    return {
      periodLength,
      trainingDays,
      success,
      rating,
      ratingDescription,
      target,
      average,
    };
  };

  // Test script
if (require.main === module) {
    const dailyExercises = [3, 0, 2, 4.5, 0, 3, 1];
    const target = 2;
  
    console.log(calculateExercises(dailyExercises, target));
  }