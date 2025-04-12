"use client"
import React, { useEffect, useState } from 'react'

const Concat = () => {
    const [isMergedArray, setIsMergedArray] = useState([])

    useEffect(() => {
        const arr1 = [1, 2, 3, 4];
        const arr2 = [5, 6, 7, 8];
        const arr3 = [9, 10, 11, 12];
        const arr4 = [
            [1, 2, 3, [11, 12, 13, [14, 15, 16, [17, 18, 19]]]
            ],
            [4, 5, 6, 0, [7, 8, 9, [10, [14, [15, 16]]]]]
        ]
        const mergedArray = arr1.concat(arr2, arr3)
        console.log(mergedArray)
        // console.log(arr4[0][3][3][3][0])
        console.log(arr4[1][4][3][1][1][0])
        setIsMergedArray(mergedArray)
    }, [])
    // ===============================
    const Question = [{
        list: {
            data: [
                {
                    title: "What is the capital of India?",
                    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
                }
            ]
        }
    }];
    console.log(Question[0].list.data[0].title + " " + Question[0].list.data[0].options[0]);
    // ===========================================
    const Questions = [
        {
            id: 1,
            question: "fine",
            choices: ["France", "Argentina", "Brazil", "Germany"],
            correctAnswer: "Argentina",
            cacategory: "Sports"
        }
    ];
    console.log(Questions[0].id, Questions[0].question)

    // ===========================================
    const Quiz = [
        {
            category: "Sports",
            questions: [
                {
                    id: 1,
                    question: "Which country won the FIFA World Cup 2022?",
                    options: ["France", "Argentina", "Brazil", "Germany"],
                    correctAnswer: "Argentina"
                },
            ]
        },

    ];
    console.log(Quiz[0].questions[0].id, Quiz[0].questions[0].correctAnswer)
    // ==========================================
    const Exam = {
        subjects: [
            {
                name: "Math",
                tests: [
                    {
                        testId: 101,
                        questions: [
                            { qid: 1, qText: "What is 2 + 2?" },
                            { qid: 2, qText: "What is 10 ÷ 2?" }
                        ]
                    }
                ]
            },
        ]
    };
    console.log(Exam.subjects[0].name)
    return (
        <div>
            <p className='text-white'>{isMergedArray.join(',')}</p>
        </div>
    )
}

export default Concat