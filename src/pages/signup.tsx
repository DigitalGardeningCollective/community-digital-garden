import React, { ReactElement, useState } from 'react';
import Head from 'next/head';
import { Box, Button, Flex, FormControl, FormLabel, HStack, Heading, Input, InputGroup, InputRightElement, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { NextPageWithLayout } from './_app';
import { Layout } from '@/components/layouts/Layout';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { Database } from '@/types/generated';

type Inputs = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

const SignUp: NextPageWithLayout = () => {
  const {
    register,
    handleSubmit
  } = useForm<Inputs>();
  const supabaseClient = useSupabaseClient<Database>();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const router = useRouter();

  const onSubmit = async (data: any) => {
    setError(null);
    try {
      const response = await supabaseClient.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
            data: {
              first_name: data.firstName,
              last_name: data.lastName,
            }
          }
      });
      console.log('response: ', response);
      response?.error?.message
        ? setError(response.error.message)
        : router.push('/home');
    } catch (error: any) {
      setError(error.message);
    }
  }

  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
                <Heading fontSize={'4xl'} textAlign={'center'}>
                    Sign up
                </Heading>
                <Text fontSize={'lg'} color={'gray.600'}>
                    to enjoy all of our cool features ✌️
                </Text>
            </Stack>
            <Box
                rounded={'lg'}
                bg={useColorModeValue('white', 'gray.700')}
                boxShadow={'lg'}
                p={8}>
                <Stack spacing={4}>
                    <HStack>
                    <Box>
                        <FormControl id="firstName" isRequired>
                        <FormLabel>First Name</FormLabel>
                        <Input 
                            type="text"
                            id="firstName"
                            {...register('firstName')}
                        />
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl id="lastName" isRequired>
                        <FormLabel>Last Name</FormLabel>
                        <Input 
                            type="text" 
                            id="lastName"
                            {...register('lastName')}
                        />
                        </FormControl>
                    </Box>
                    </HStack>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl id="email" isRequired>
                        <FormLabel>Email address</FormLabel>
                        <Input 
                            type="email" 
                            id="email"
                            {...register('email')}
                        />
                        </FormControl>
                        <FormControl id="password" isRequired>
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                            <Input 
                                type={showPassword ? 'text' : 'password'} 
                                id="password"
                                {...register('password')}
                            />
                            <InputRightElement h={'full'}>
                            <Button
                                variant={'ghost'}
                                onClick={() =>
                                setShowPassword((showPassword) => !showPassword)
                                }>
                                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                            </InputRightElement>
                        </InputGroup>
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                        <Button
                            type="submit"
                            loadingText="Submitting"
                            size="lg"
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                            bg: 'blue.500',
                            }}>
                            Sign up
                        </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={'center'}>
                                Already a user? <Link color={'blue.400'}>Login</Link>
                            </Text>
                        </Stack>
                    </form>
                </Stack>
            </Box>
        </Stack>
    </Flex>
    </>
  )
}

SignUp.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default SignUp;