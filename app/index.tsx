import { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const index = () => {
  const [CurrentQuestion , setCurrentQuestion] = useState<number>(0);
  const [Score , setScore] = useState<number>(0);
  const [ShowScore , setShowScore] = useState<boolean>(false);  

  const quizData = [
    {
      question:"What is the national flower of Sri Lanka?",
      options:["Rose" , "Blue Water Lily" , "Anthurium" , "Jesmine"],
      answer:"Blue Water Lily"
    },
    {
      question:"What is the national sport of Sri Lanka?",
      options:["Cricket" , "Carrom" , "Football" , "Wollyball"],
      answer:"Wollyball"
    },
    {
      question:"Who is the writer of the Sri Lankan National Anthem?",
      options:["H.R.Jothipala" , "Mahagamasekara" , "Ananda Samarakon" , "Wasantha Mudalige"],
      answer:"Ananda Samarakon"
    },
    {
      question:"What is the national bird of Sri Lanka?",
      options:["Junglefowl" , "Crow" , "Bat" , "Owl"],
      answer:"Junglefowl"
    },
  ];

  const HandelAnswer = (selectedAnswer:any) => {
    const answer = quizData[CurrentQuestion]?.answer;
    if(answer === selectedAnswer){
      setScore((preScore) => preScore + 1);
    }

    const nextQuestion =  CurrentQuestion + 1;
    if(nextQuestion < quizData.length){
      setCurrentQuestion(nextQuestion);
    }else{
      setShowScore(true);
    }
  }

  const HandleResetButton = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  }
  return (
    <View className='flex items-center justify-center w-full h-full'>
      {ShowScore ? (
        <View className='flex items-center justify-center flex-col'>
          <Text className='text-xl font-bold '>Your Score is {Score}</Text>
          <TouchableOpacity onPress={HandleResetButton}>
            <Text className='px-3 py-2 border-none text-white text-lg rounded-lg font-semibold bg-purple-600 mt-2'>Reset</Text>
          </TouchableOpacity>
        </View>
      ):(
        <View className='bg-[#dddddd] py-5 px-3 m-[10px] rounded-[5px]'>
          <Text className='font-bold text-lg'>{quizData[CurrentQuestion]?.question}</Text>
          {quizData[CurrentQuestion]?.options.map((item , index ) => (
            <TouchableOpacity key={index} onPress={() => HandelAnswer(item)} className='border-2 border-black rounded-md mt-2'>
              <Text className='text-green-500 font-semibold p-3'>{index + 1}. {item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  )
}

export default index