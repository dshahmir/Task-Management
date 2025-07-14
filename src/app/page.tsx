'use client'

import React, { useState, useEffect } from 'react'
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  Avatar,
  Stack,
  TextField,
  CircularProgress,
} from '@mui/material'
import {
  MedicalServices,
  Person,
  CheckCircle,
} from '@mui/icons-material'
import { submitResponses } from './utils/api'
import { SubmitResponsesRequest, MedicalResponse } from './types/api'

interface Message {
  id: number
  text: string
  sender: 'bot' | 'user'
  timestamp: Date
}

interface UserResponses {
  name: string
  dateOfBirth: string
  gender: string
  medicalAnswers: { [key: number]: string }
}

export default function PreConsultChatbot() {
  const [messages, setMessages] = useState<Message[]>([])
  const [showButtons, setShowButtons] = useState(true)
  const [userAgreed, setUserAgreed] = useState<boolean | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userResponses, setUserResponses] = useState<UserResponses>({
    name: '',
    dateOfBirth: '',
    gender: '',
    medicalAnswers: {}
  })
  const [inputValue, setInputValue] = useState('')
  const [showInput, setShowInput] = useState(false)
  const [selectedMedicalQuestions, setSelectedMedicalQuestions] = useState<number[]>([])
  const [currentMedicalQuestion, setCurrentMedicalQuestion] = useState(0)
  const [isAskingMedicalQuestions, setIsAskingMedicalQuestions] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null)

  const questions = [
    "What is your name?",
    "What is your Date of birth (dd/mm/yyyy)?",
    "What is your gender?"
  ]

  const medicalQuestions = [
    "Do you have any chronic medical conditions (diabetes, hypertension, heart disease, etc.)?",
    "Are you currently taking any medications? If yes, please list them.",
    "Do you have any known allergies to medications, foods, or other substances?",
    "Have you had any surgeries in the past? If yes, please specify.",
    "Do you smoke or use tobacco products?",
    "How often do you consume alcohol?",
    "Do you have a family history of any significant medical conditions?",
    "Are you experiencing any pain or discomfort currently? If yes, please describe.",
    "Have you noticed any changes in your appetite, weight, or sleep patterns recently?",
    "Are you up to date with your routine vaccinations and health screenings?"
  ]

  // Function to randomly select 5 questions from the 10 medical questions
  const selectRandomMedicalQuestions = () => {
    // Create an array of indices directly instead of using Array.keys()
    const indices = Array.from({ length: medicalQuestions.length }, (_, i) => i)
    const shuffled = indices.sort(() => 0.5 - Math.random())
    const selected = shuffled.slice(0, 5)
    console.log('Selected medical questions:', selected)
    return selected
  }

  useEffect(() => {
    setMessages([
      {
        id: 1,
        text: "I would like to ask you some questions before you visit the doctor. Do you agree?",
        sender: 'bot',
        timestamp: new Date()
      }
    ])
  }, [])

  const handleResponse = (agreed: boolean) => {
    // Add user response
    const userMessage: Message = {
      id: messages.length + 1,
      text: agreed ? "Yes" : "No",
      sender: 'user',
      timestamp: new Date()
    }
    let botResponse: Message
    if (agreed) {
      botResponse = {
        id: messages.length + 2,
        text: "Great! Let's begin with the questions.",
        sender: 'bot',
        timestamp: new Date()
      }
    } else {
      botResponse = {
        id: messages.length + 2,
        text: "I understand. Please let me know when you're ready to begin.",
        sender: 'bot',
        timestamp: new Date()
      }
    }
    setMessages(prev => [...prev, userMessage, botResponse])
    setShowButtons(false)
    setUserAgreed(agreed)
    if (agreed) {
      setTimeout(() => {
        askNextQuestion()
      }, 1000)
    }
  }

  const handleReadyToBegin = () => {
    const userMessage: Message = {
      id: messages.length + 1,
      text: "I'm ready to begin",
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setUserAgreed(true)
    setTimeout(() => {
      askNextQuestion()
    }, 500)
  }

  // This function is now only used for the initial question after user agrees
  const askNextQuestion = () => {
    // Only ask the first question, subsequent questions will be handled in handleInputSubmit
    const botResponse: Message = {
      id: messages.length + 1,
      text: questions[currentQuestion],
      sender: 'bot',
      timestamp: new Date()
    }
    setMessages(prev => [...prev, botResponse])
    setShowInput(true)
  }

  // Function to ask a specific medical question by index
  const askMedicalQuestionByIndex = (questionIndex: number) => {
    console.log('Asking medical question by index:', { 
      questionIndex, 
      question: medicalQuestions[selectedMedicalQuestions[questionIndex]]
    })
    
    const botResponse: Message = {
      id: messages.length + 1,
      text: medicalQuestions[selectedMedicalQuestions[questionIndex]],
      sender: 'bot',
      timestamp: new Date()
    }
    setMessages(prev => [...prev, botResponse])
    setShowInput(true)
  }
  
  // Function to handle the flow of medical questions
  const askNextMedicalQuestion = () => {
    console.log('askNextMedicalQuestion called', { 
      currentMedicalQuestion, 
      selectedMedicalQuestions, 
      selectedLength: selectedMedicalQuestions.length 
    })
    
    if (currentMedicalQuestion < selectedMedicalQuestions.length) {
      askMedicalQuestionByIndex(currentMedicalQuestion)
    } else {
      // All medical questions completed
      console.log('All medical questions completed')
      const botResponse: Message = {
        id: messages.length + 1,
        text: "Thank you for completing the pre-consultation questionnaire. Your responses have been saved and will help the doctor provide better care during your visit.",
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setShowInput(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleInputSubmit()
    }
  }

  const handleInputSubmit = () => {
    if (!inputValue.trim()) return
    
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setShowInput(false)
    
    if (!isAskingMedicalQuestions) {
      // Handling basic questions
      const newResponses = { ...userResponses }
      if (currentQuestion === 0) {
        newResponses.name = inputValue
      } else if (currentQuestion === 1) {
        newResponses.dateOfBirth = inputValue
      } else if (currentQuestion === 2) {
        newResponses.gender = inputValue
      }
      
      setUserResponses(newResponses)
      const nextQuestionIndex = currentQuestion + 1
      setCurrentQuestion(nextQuestionIndex)
      
      setTimeout(() => {
        if (nextQuestionIndex < questions.length) {
          // Ask next basic question
          const botResponse: Message = {
            id: messages.length + 2, // +2 because we just added the user message
            text: questions[nextQuestionIndex],
            sender: 'bot',
            timestamp: new Date()
          }
          setMessages(prev => [...prev, botResponse])
          setShowInput(true)
        } else {
          // All basic questions completed, move to medical questions
          console.log('Basic questions completed, moving to medical questions')
          const selected = selectRandomMedicalQuestions()
          console.log('Selected medical questions:', selected)
          
          // First add the transition message
          const transitionMessage: Message = {
            id: messages.length + 2, // +2 because we just added the user message
            text: "Thank you for the basic information. Now I'll ask you some medical questions to better understand your health status.",
            sender: 'bot',
            timestamp: new Date()
          }
          
          // Update state with new message and medical questions data
          setMessages(prev => [...prev, transitionMessage])
          setSelectedMedicalQuestions(selected)
          setIsAskingMedicalQuestions(true)
          setCurrentMedicalQuestion(0)
          
          // Start asking medical questions after a brief delay
          console.log('Setting timeout to ask first medical question')
          setTimeout(() => {
            console.log('Timeout fired, asking first medical question')
            // Use the selected array directly to avoid any state timing issues
            const firstMedicalQuestion: Message = {
              id: messages.length + 3, // +3 because we added user message and transition message
              text: medicalQuestions[selected[0]],
              sender: 'bot',
              timestamp: new Date()
            }
            setMessages(prev => [...prev, firstMedicalQuestion])
            setShowInput(true)
          }, 1000)
        }
      }, 500)
    } else {
      // Saving medical question responses
      const questionIndex = selectedMedicalQuestions[currentMedicalQuestion]
      const newResponses = { 
        ...userResponses,
        medicalAnswers: {
          ...userResponses.medicalAnswers,
          [questionIndex]: inputValue
        }
      }
      
      // Update state with new responses and increment question counter
      setUserResponses(newResponses)
      const nextMedicalQuestionIndex = currentMedicalQuestion + 1
      setCurrentMedicalQuestion(nextMedicalQuestionIndex)
      
      // Ask next medical question after a brief delay
      setTimeout(() => {
        console.log('Moving to next medical question', { nextMedicalQuestionIndex })
        
        if (nextMedicalQuestionIndex < selectedMedicalQuestions.length) {
          // There are more medical questions to ask
          const nextQuestionIndex = selectedMedicalQuestions[nextMedicalQuestionIndex]
          const botResponse: Message = {
            id: messages.length + 2, // +2 because we just added the user message
            text: medicalQuestions[nextQuestionIndex],
            sender: 'bot',
            timestamp: new Date()
          }
          setMessages(prev => [...prev, botResponse])
          setShowInput(true)
        } else {
          // All medical questions completed - show processing message
          setIsSubmitting(true)
          const processingMessage: Message = {
            id: messages.length + 2, // +2 because we just added the user message
            text: "Processing your responses...",
            sender: 'bot',
            timestamp: new Date()
          }
          setMessages(prev => [...prev, processingMessage])
          setShowInput(false)
          
          // Prepare data for API submission
          const medicalResponses: MedicalResponse[] = Object.entries(userResponses.medicalAnswers).map(([questionIndex, answer]) => ({
            questionIndex: parseInt(questionIndex),
            question: medicalQuestions[parseInt(questionIndex)],
            answer
          }));
          
          const requestData: SubmitResponsesRequest = {
            patientContext: {
              name: userResponses.name,
              dateOfBirth: userResponses.dateOfBirth,
              gender: userResponses.gender
            },
            medicalResponses
          };
          
          // Submit to API
          submitResponses(requestData)
            .then(response => {
              console.log('API response:', response);
              setSubmitSuccess(response.success);
              
              // Add final message
              const completionMessage: Message = {
                id: messages.length + 3,
                text: response.success 
                  ? "Thank you for your time. Your responses have been securely stored and will be reviewed by your doctor." 
                  : "There was an issue submitting your responses. Please try again later or contact support.",
                sender: 'bot',
                timestamp: new Date()
              };
              setMessages(prev => [...prev, completionMessage]);
            })
            .catch(error => {
              console.error('Error submitting responses:', error);
              setSubmitSuccess(false);
              
              // Add error message
              const errorMessage: Message = {
                id: messages.length + 3,
                text: "There was an error processing your responses. Please try again later.",
                sender: 'bot',
                timestamp: new Date()
              };
              setMessages(prev => [...prev, errorMessage]);
            })
            .finally(() => {
              setIsSubmitting(false);
            });
        }
      }, 500)
    }
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Avatar
          sx={{
            width: 80,
            height: 80,
            margin: '0 auto',
            bgcolor: 'primary.main',
          }}
        >
          <MedicalServices sx={{ fontSize: 40 }} />
        </Avatar>
        <Typography variant="h4" component="h1" gutterBottom>
          PreConsult
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Answer a few questions before your doctor's appointment
        </Typography>
      </Box>

      <Paper
        elevation={3}
        sx={{
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Box sx={{ height: '400px', overflowY: 'auto', p: 2 }}>
          {messages.map((message) => (
            <Box
              key={message.id}
              sx={{
                display: 'flex',
                justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                mb: 2,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  maxWidth: '80%',
                }}
              >
                {message.sender === 'bot' && (
                  <Avatar
                    sx={{
                      bgcolor: 'primary.main',
                      width: 32,
                      height: 32,
                      mr: 1,
                      mt: 0.5,
                    }}
                  >
                    <MedicalServices sx={{ fontSize: 16 }} />
                  </Avatar>
                )}
                <Box>
                  <Paper
                    sx={{
                      p: 1.5,
                      bgcolor: message.sender === 'user' ? 'primary.main' : 'grey.100',
                      color: message.sender === 'user' ? 'white' : 'text.primary',
                      borderRadius: 2,
                    }}
                  >
                    <Typography variant="body1">{message.text}</Typography>
                  </Paper>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ pl: 1, pt: 0.5, display: 'block' }}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </Typography>
                </Box>
                {message.sender === 'user' && (
                  <Avatar
                    sx={{
                      bgcolor: 'grey.300',
                      width: 32,
                      height: 32,
                      ml: 1,
                      mt: 0.5,
                    }}
                  >
                    <Person sx={{ fontSize: 16 }} />
                  </Avatar>
                )}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Action Buttons */}
        <Box sx={{ p: 3, bgcolor: 'white', borderTop: '1px solid #e0e0e0' }}>
          {showButtons && (
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button
                variant="contained"
                size="large"
                onClick={() => handleResponse(true)}
                sx={{ minWidth: 120 }}
              >
                Yes
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => handleResponse(false)}
                sx={{ minWidth: 120 }}
              >
                No
              </Button>
            </Stack>
          )}

          {!showButtons && userAgreed === false && (
            <Box sx={{ textAlign: 'center' }}>
              <Button
                variant="contained"
                size="large"
                onClick={handleReadyToBegin}
                sx={{ minWidth: 200 }}
              >
                I'm Ready to Begin
              </Button>
            </Box>
          )}

          {userAgreed === true && !showInput && !isAskingMedicalQuestions && currentQuestion >= questions.length && selectedMedicalQuestions.length === 0 && (
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Preparing medical questions...
              </Typography>
            </Box>
          )}

          {showInput && (
            <Stack direction="row" spacing={2}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Type your answer..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                autoFocus
              />
              <Button
                variant="contained"
                onClick={handleInputSubmit}
                disabled={!inputValue.trim()}
                sx={{ minWidth: 80 }}
              >
                Send
              </Button>
            </Stack>
          )}
        </Box>
      </Paper>

      {/* Debug: Show saved responses (remove in production) */}
      {userResponses.name && (
        <Paper sx={{ mt: 2, p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6">Response Summary</Typography>
            {isSubmitting && (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CircularProgress size={20} sx={{ mr: 1 }} />
                <Typography variant="body2" color="text.secondary">Submitting...</Typography>
              </Box>
            )}
            {submitSuccess === true && (
              <Box sx={{ display: 'flex', alignItems: 'center', color: 'success.main' }}>
                <CheckCircle fontSize="small" sx={{ mr: 1 }} />
                <Typography variant="body2" color="success.main">Submitted successfully</Typography>
              </Box>
            )}
            {submitSuccess === false && (
              <Typography variant="body2" color="error.main">Submission failed</Typography>
            )}
          </Box>
          
          <Typography variant="h6" gutterBottom>Basic Information:</Typography>
          <Typography>Name: {userResponses.name}</Typography>
          <Typography>Date of Birth: {userResponses.dateOfBirth}</Typography>
          <Typography>Gender: {userResponses.gender}</Typography>
          
          {Object.keys(userResponses.medicalAnswers).length > 0 && (
            <>
              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>Medical Responses:</Typography>
              {Object.entries(userResponses.medicalAnswers).map(([questionIndex, answer]) => (
                <Box key={questionIndex} sx={{ mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    Q: {medicalQuestions[parseInt(questionIndex)]}
                  </Typography>
                  <Typography variant="body1">
                    A: {answer}
                  </Typography>
                </Box>
              ))}
            </>
          )}
        </Paper>
      )}
    </Container>
  )
}
