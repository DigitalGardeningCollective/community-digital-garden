import { Button, FormControl, FormLabel, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, Textarea } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export interface RejectSubmissionInput {
    reason: string
};

type Props = {
    isLoading: boolean;
    onClose: () => void;
    onSubmit: (data: RejectSubmissionInput) => void;
    defaultValues: RejectSubmissionInput;
};

export const RejectSubmissionForm = ({ isLoading, onClose, onSubmit, defaultValues }: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm<RejectSubmissionInput>({
        defaultValues,
        mode: "onChange"
    });

    console.log('errors -', errors);
    console.log('isValid -', isValid);

    return (
        <ModalContent>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ModalHeader>Reject Submission</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl>
                        <FormLabel fontWeight={'bold'} mb={2}>Why are you rejecting this submission?</FormLabel>
                        <Textarea 
                            id="reason" 
                            placeholder='Enter your reason here'
                            {...register("reason", {
                                required: 'This is required'
                                })
                            } 
                        />
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button type="submit" isDisabled={!isValid} colorScheme='blue' mr={3} isLoading={isLoading}>
                    Submit
                    </Button>
                    <Button variant='ghost' onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </form>
        </ModalContent>
    );
}