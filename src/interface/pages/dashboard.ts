import { FieldValues, UseFormReturn } from "react-hook-form";
import { NavigateFunction } from "react-router-dom";

export interface AddFormProps {
	submitForm: (e: React.FormEvent<HTMLFormElement>) => void;
	methods: UseFormReturn<FieldValues, any, FieldValues>;
	isLoading: boolean;
	errorAdd: string;
}
