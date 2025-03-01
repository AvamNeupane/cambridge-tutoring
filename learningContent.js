
import { 
  Calculator, 
  BookText, 
  PlusCircle, 
  MinusCircle, 
  Divide, 
  Percent,
  LineChart, 
  BarChart, 
  PieChart,
  Sigma,
  ChevronRight
} from 'lucide-react';

const learningContent = [
  {
    id: 'grade1',
    title: 'Grade 1',
    type: 'grade',
    description: 'Fundamental math concepts for first graders',
    icon: BookText,
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    chapters: [
      {
        id: 'addition',
        title: 'Addition',
        description: 'Learn to add numbers',
        icon: PlusCircle,
        content: {
          text: `
# Addition for Grade 1

Addition is when we combine or put together two or more numbers to find their total.

For example:
- 2 + 3 = 5
- 1 + 4 = 5

When we add numbers, we're counting how many there are in total. If you have 2 apples and get 3 more, you'll have 5 apples in total!

## Addition Facts to 10

Here are some addition facts to practice:
- 0 + 1 = 1
- 1 + 1 = 2
- 2 + 2 = 4
- 3 + 3 = 6
- 4 + 4 = 8
- 5 + 5 = 10

Let's practice adding numbers together!

*Reference: Adapted from OpenStax Elementary Mathematics.*
          `,
          imageUrl: 'https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          videoId: 'AuX7nPBqDts'
        },
        practice: {
          questions: [
            {
              question: 'What is 2 + 3?',
              options: ['4', '5', '6', '7'],
              answer: '5'
            },
            {
              question: 'What is 4 + 2?',
              options: ['5', '6', '7', '8'],
              answer: '6'
            },
            {
              question: 'What is 1 + 5?',
              options: ['5', '6', '7', '8'],
              answer: '6'
            },
            {
              question: 'What is 3 + 3?',
              options: ['5', '6', '7', '8'],
              answer: '6'
            },
            {
              question: 'What is 0 + 8?',
              options: ['0', '8', '10', '18'],
              answer: '8'
            }
          ]
        }
      },
      {
        id: 'subtraction',
        title: 'Subtraction',
        description: 'Learn to subtract numbers',
        icon: MinusCircle,
        content: {
          text: `
# Subtraction for Grade 1

Subtraction is when we take away or remove some items from a group.

For example:
- 5 - 2 = 3
- 7 - 4 = 3

When we subtract, we're finding out how many are left. If you have 5 cookies and eat 2 of them, you'll have 3 cookies left!

## Subtraction Facts to 10

Here are some subtraction facts to practice:
- 10 - 1 = 9
- 9 - 2 = 7
- 8 - 3 = 5
- 7 - 4 = 3
- 6 - 5 = 1
- 5 - 5 = 0

Let's practice subtracting numbers!

*Reference: Adapted from OpenStax Elementary Mathematics.*
          `,
          imageUrl: 'https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          videoId: 'GdXClek-05I'
        },
        practice: {
          questions: [
            {
              question: 'What is 5 - 2?',
              options: ['2', '3', '4', '5'],
              answer: '3'
            },
            {
              question: 'What is 8 - 3?',
              options: ['3', '4', '5', '6'],
              answer: '5'
            },
            {
              question: 'What is 7 - 1?',
              options: ['5', '6', '7', '8'],
              answer: '6'
            },
            {
              question: 'What is 9 - 4?',
              options: ['3', '4', '5', '6'],
              answer: '5'
            },
            {
              question: 'What is 10 - 10?',
              options: ['0', '1', '10', '20'],
              answer: '0'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'grade2',
    title: 'Grade 2',
    type: 'grade',
    description: 'Math concepts for second graders',
    icon: BookText,
    imageUrl: 'https://images.unsplash.com/photo-1509869175650-a1d97972541a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    chapters: [
      {
        id: 'multiplication',
        title: 'Multiplication',
        description: 'Learn to multiply numbers',
        icon: Divide,
        content: {
          text: `
# Multiplication for Grade 2

Multiplication is a faster way of adding the same number multiple times.

For example:
- 2 × 3 means 2 + 2 + 2 (adding 2 three times), which equals 6
- 5 × 4 means 5 + 5 + 5 + 5 (adding 5 four times), which equals 20

## Multiplication Facts to 5

Here are some multiplication facts to practice:
- 1 × 1 = 1
- 2 × 2 = 4
- 3 × 3 = 9
- 4 × 4 = 16
- 5 × 5 = 25

Multiplication helps us count things in groups!

*Reference: Adapted from OpenStax Elementary Mathematics.*
          `,
          imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          videoId: 'iiR3tzA9Rqg'
        },
        practice: {
          questions: [
            {
              question: 'What is 2 × 4?',
              options: ['6', '8', '10', '12'],
              answer: '8'
            },
            {
              question: 'What is 3 × 2?',
              options: ['5', '6', '7', '8'],
              answer: '6'
            },
            {
              question: 'What is 5 × 1?',
              options: ['1', '5', '6', '10'],
              answer: '5'
            },
            {
              question: 'What is 4 × 3?',
              options: ['7', '9', '12', '15'],
              answer: '12'
            },
            {
              question: 'What is 2 × 5?',
              options: ['7', '8', '9', '10'],
              answer: '10'
            }
          ]
        }
      },
      {
        id: 'fractions',
        title: 'Fractions',
        description: 'Learn about simple fractions',
        icon: Percent,
        content: {
          text: `
# Fractions for Grade 2

A fraction is a part of a whole. It shows how many parts of a whole we have.

For example:
- 1/2 (one-half) means 1 out of 2 equal parts
- 1/4 (one-quarter) means 1 out of 4 equal parts

## Common Fractions

Here are some common fractions:
- 1/2 (one-half)
- 1/3 (one-third)
- 1/4 (one-quarter)
- 3/4 (three-quarters)

Fractions help us share things equally!

*Reference: Adapted from OpenStax Elementary Mathematics.*
          `,
          imageUrl: 'https://images.unsplash.com/photo-1564939558297-fc396f18e5c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          videoId: 'n0FZhQ_GkKw'
        },
        practice: {
          questions: [
            {
              question: 'If a pizza is cut into 4 equal slices and you eat 1 slice, what fraction of the pizza did you eat?',
              options: ['1/2', '1/3', '1/4', '3/4'],
              answer: '1/4'
            },
            {
              question: 'What fraction represents half of a whole?',
              options: ['1/3', '1/2', '2/3', '3/4'],
              answer: '1/2'
            },
            {
              question: 'If you have 3 out of 4 equal parts, what fraction do you have?',
              options: ['1/4', '1/2', '2/4', '3/4'],
              answer: '3/4'
            },
            {
              question: 'What is 1/3 of 6 apples?',
              options: ['1 apple', '2 apples', '3 apples', '4 apples'],
              answer: '2 apples'
            },
            {
              question: 'If a chocolate bar has 8 equal pieces and you eat 4 pieces, what fraction did you eat?',
              options: ['1/4', '1/2', '3/4', '4/8'],
              answer: '1/2'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'calculus',
    title: 'Calculus',
    type: 'topic',
    description: 'Introduction to limits, derivatives, and integrals',
    icon: Sigma,
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    chapters: [
      {
        id: 'limits',
        title: 'Limits',
        description: 'Understanding the concept of limits',
        icon: ChevronRight,
        content: {
          text: `
# Introduction to Limits

Limits form the foundation of calculus. A limit describes the value that a function approaches as the input approaches some value.

## Definition of a Limit

The limit of a function f(x) as x approaches a value c is written as:

lim(x→c) f(x) = L

This means that as x gets closer and closer to c, the value of f(x) gets closer and closer to L.

## Examples

1. lim(x→2) (x² + 3) = 7
   As x approaches 2, the function x² + 3 approaches 7.

2. lim(x→0) (sin(x)/x) = 1
   This is a special limit that can't be evaluated by direct substitution.

## Applications

Limits are used to:
- Define derivatives
- Analyze function behavior
- Understand continuity
- Solve approximation problems

*Reference: Adapted from OpenStax Calculus Volume 1.*
          `,
          imageUrl: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          videoId: 'riXcZT2ICjA'
        },
        practice: {
          questions: [
            {
              question: 'What is lim(x→3) (x² - 4)?',
              options: ['1', '5', '9', '13'],
              answer: '5'
            },
            {
              question: 'If lim(x→2) f(x) = 7 and lim(x→2) g(x) = 3, what is lim(x→2) [f(x) + g(x)]?',
              options: ['4', '10', '21', 'Cannot be determined'],
              answer: '10'
            },
            {
              question: 'What is lim(x→0) (sin(x)/x)?',
              options: ['0', '1', 'Infinity', 'Does not exist'],
              answer: '1'
            },
            {
              question: 'What is lim(x→1) (x³ - 1)/(x - 1)?',
              options: ['0', '1', '3', 'Does not exist'],
              answer: '3'
            },
            {
              question: 'For what value of c will lim(x→2) (x² - cx + 2c) = 10?',
              options: ['1', '2', '3', '4'],
              answer: '3'
            }
          ]
        }
      },
      {
        id: 'derivatives',
        title: 'Derivatives',
        description: 'Understanding rates of change',
        icon: LineChart,
        content: {
          text: `
# Introduction to Derivatives

A derivative measures the rate at which a function changes. It tells us the slope of the tangent line to the function at a particular point.

## Definition of a Derivative

The derivative of a function f(x) is defined as:

f'(x) = lim(h→0) [f(x+h) - f(x)]/h

## Basic Derivative Rules

1. Constant Rule: If f(x) = c, then f'(x) = 0
2. Power Rule: If f(x) = x^n, then f'(x) = n·x^(n-1)
3. Sum Rule: If f(x) = g(x) + h(x), then f'(x) = g'(x) + h'(x)
4. Product Rule: If f(x) = g(x)·h(x), then f'(x) = g'(x)·h(x) + g(x)·h'(x)

## Applications

Derivatives are used to:
- Find rates of change
- Optimize functions (find max/min values)
- Analyze motion
- Approximate function values

*Reference: Adapted from OpenStax Calculus Volume 1.*
          `,
          imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          videoId: 'rAof9Ld5sOg'
        },
        practice: {
          questions: [
            {
              question: 'What is the derivative of f(x) = 3x² + 2x - 1?',
              options: ['f\'(x) = 3x² + 2', 'f\'(x) = 6x + 2', 'f\'(x) = 6x² + 2x', 'f\'(x) = 6x'],
              answer: 'f\'(x) = 6x + 2'
            },
            {
              question: 'What is the derivative of f(x) = sin(x)?',
              options: ['f\'(x) = cos(x)', 'f\'(x) = -sin(x)', 'f\'(x) = -cos(x)', 'f\'(x) = tan(x)'],
              answer: 'f\'(x) = cos(x)'
            },
            {
              question: 'If f(x) = e^x, what is f\'(x)?',
              options: ['f\'(x) = e^x', 'f\'(x) = xe^x', 'f\'(x) = e^(-x)', 'f\'(x) = 0'],
              answer: 'f\'(x) = e^x'
            },
            {
              question: 'What is the derivative of f(x) = ln(x)?',
              options: ['f\'(x) = 1/x', 'f\'(x) = ln(x)/x', 'f\'(x) = x', 'f\'(x) = 1'],
              answer: 'f\'(x) = 1/x'
            },
            {
              question: 'If f(x) = x³ - 2x² + 4x - 7, what is f\'(2)?',
              options: ['5', '6', '8', '10'],
              answer: '8'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'statistics',
    title: 'Statistics',
    type: 'topic',
    description: 'Introduction to data analysis and probability',
    icon: BarChart,
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    chapters: [
      {
        id: 'descriptive-stats',
        title: 'Descriptive Statistics',
        description: 'Methods for summarizing data',
        icon: PieChart,
        content: {
          text: `
# Descriptive Statistics

Descriptive statistics involves methods of organizing, summarizing, and presenting data in a convenient and informative way.

## Measures of Central Tendency

1. **Mean**: The average of all values in a data set.
   - Formula: μ = Σx / n

2. **Median**: The middle value when data is ordered.
   - For odd number of values: middle value
   - For even number: average of two middle values

3. **Mode**: The most frequently occurring value.

## Measures of Dispersion

1. **Range**: The difference between the maximum and minimum values.
   - Formula: Range = Max - Min

2. **Variance**: The average of squared deviations from the mean.
   - Formula: σ² = Σ(x - μ)² / n

3. **Standard Deviation**: Square root of the variance.
   - Formula: σ = √σ²

## Data Visualization

Common ways to visualize data include:
- Bar charts
- Histograms
- Pie charts
- Box plots
- Scatter plots

*Reference: Adapted from OpenStax Introductory Statistics.*
          `,
          imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          videoId: 'xxpc-HPKN28'
        },
        practice: {
          questions: [
            {
              question: 'What is the mean of the data set: 4, 7, 2, 9, 3?',
              options: ['3', '4', '5', '7'],
              answer: '5'
            },
            {
              question: 'What is the median of the data set: 12, 5, 7, 10, 15?',
              options: ['5', '7', '10', '12'],
              answer: '10'
            },
            {
              question: 'What is the range of the data set: 8, 3, 9, 5, 6?',
              options: ['3', '5', '6', '9'],
              answer: '6'
            },
            {
              question: 'If the standard deviation of a data set is 0, what does this indicate?',
              options: ['The data has no values', 'All data values are the same', 'The data is normally distributed', 'The mean is 0'],
              answer: 'All data values are the same'
            },
            {
              question: 'Which graph is most appropriate for showing the relationship between two continuous variables?',
              options: ['Bar chart', 'Pie chart', 'Scatter plot', 'Histogram'],
              answer: 'Scatter plot'
            }
          ]
        }
      },
      {
        id: 'probability',
        title: 'Probability',
        description: 'Understanding chance and likelihood',
        icon: Calculator,
        content: {
          text: `
# Introduction to Probability

Probability measures the likelihood of an event occurring. It is expressed as a number between 0 (impossible) and 1 (certain).

## Basic Probability Concepts

1. **Sample Space (S)**: The set of all possible outcomes.

2. **Event (E)**: A subset of the sample space.

3. **Probability of an Event**: P(E) = Number of favorable outcomes / Total number of possible outcomes

## Probability Rules

1. **Addition Rule**: P(A or B) = P(A) + P(B) - P(A and B)

2. **Multiplication Rule**: 
   - For independent events: P(A and B) = P(A) × P(B)
   - For dependent events: P(A and B) = P(A) × P(B|A)

3. **Complement Rule**: P(not A) = 1 - P(A)

## Probability Distributions

Common probability distributions include:
- Binomial Distribution
- Normal Distribution
- Poisson Distribution
- Uniform Distribution

*Reference: Adapted from OpenStax Introductory Statistics.*
          `,
          imageUrl: 'https://images.unsplash.com/photo-1553815035-92b6728fa698?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          videoId: 'uzkc-qNVoOk'
        },
        practice: {
          questions: [
            {
              question: 'When flipping a fair coin, what is the probability of getting heads?',
              options: ['0', '0.25', '0.5', '1'],
              answer: '0.5'
            },
            {
              question: 'When rolling a standard six-sided die, what is the probability of rolling an even number?',
              options: ['1/6', '1/3', '1/2', '2/3'],
              answer: '1/2'
            },
            {
              question: 'If the probability of an event occurring is 0.7, what is the probability of it not occurring?',
              options: ['0.3', '0.4', '0.7', '1.7'],
              answer: '0.3'
            },
            {
              question: 'Two events A and B are mutually exclusive. If P(A) = 0.3 and P(B) = 0.4, what is P(A or B)?',
              options: ['0', '0.12', '0.7', '1.2'],
              answer: '0.7'
            },
            {
              question: 'If P(A) = 0.5 and P(B|A) = 0.4, what is P(A and B)?',
              options: ['0.1', '0.2', '0.5', '0.9'],
              answer: '0.2'
            }
          ]
        }
      }
    ]
  }
];

// Simple helper functions to get content and chapters
const getContentById = (id) => {
  return learningContent.find(content => content.id === id);
};

const getChapterById = (contentId, chapterId) => {
  const content = getContentById(contentId);
  return content?.chapters.find(chapter => chapter.id === chapterId);
};

export { getContentById, getChapterById };
export default learningContent;
