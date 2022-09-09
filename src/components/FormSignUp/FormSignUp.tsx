import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { getFirebaseMessage } from '../../utils/firebaseErrors';

type SignUpValues = {
    email: string;
    password: string;
};

export const FormSignUp = () => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<SignUpValues>();

    const onSubmit: SubmitHandler<SignUpValues> = ({ email, password }) => {
        setIsLoading(true);
        setErrorMessage(null);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                console.log(userCredential);
                navigate('/');
            })
            .catch(err => {
                setErrorMessage(getFirebaseMessage(err.code));
            })
            .finally(() => {
                setIsLoading(false);
            });
        reset();
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="d-flex flex-column gap-3 p-3 rounded shadow-lg w-100"
            style={{ maxWidth: 400 }}
        >
            <label>
                Email:
                <input
                    type="text"
                    className="form-control"
                    {...register('email', {
                        required: 'Email is requared',
                    })}
                />
            </label>
            {errors.email && (
                <p className="text-danger">{errors.email.message}</p>
            )}
            <label>
                Password:
                <input
                    type="password"
                    className="form-control"
                    {...register('password', {
                        required: 'Password is requared',
                        minLength: {
                            value: 6,
                            message: 'Password must contain six symbols',
                        },
                    })}
                />
            </label>
            {errors.password && (
                <p className="text-danger">{errors.password.message}</p>
            )}
            <p>
                Already have an account? <Link to="/sign-in">Sign In</Link>
            </p>
            {errorMessage && (
                <p className="text-danger font-bold">{errorMessage}</p>
            )}
            <button type="submit" className="btn btn-primary">
                Sign Up{' '}
                {isLoading && (
                    <div className="spinner-border text-white">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                )}
            </button>
        </form>
    );
};
