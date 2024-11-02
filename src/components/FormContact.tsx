/* Import Librarys */
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser';

/* Icons (Lucide React) */
import { Send } from 'lucide-react';

const schema = z.object({
    name: z.string()
    .min(1, {message: "O campo nome é obrigatório."})
    .transform(name => {
        return name.trim().split(' ').map(word => {
            return word[0].toLocaleUpperCase().concat(word.substring(1))
        }).join(' ')
    }),
    email: z.string()
    .min(1, {message: "O campo E-mail é obrigatório."})
    .email({message: "Endereço de E-mail inválido"}),
    message: z.string()
    .min(1, {message: "O campo mensagem é obrigatório."}),
});

type FormFields = z.infer<typeof schema>;

export function FormContact() {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormFields>({
        resolver: zodResolver(schema)
    });

    const onSubmit: SubmitHandler<FormFields> = async (info) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const data = {
            service_id: 'service_kpn6ma9',
            template_id: 'template_da5kjlr',
            public_key: 'NDbSxx5QH_5G7I-v2',
            template_params: {
                to_name: 'Aleksander Balduino',
                from_name: info.name,
                from_email: info.email,
                message: info.message
            }
        };

        emailjs.send(data.service_id, data.template_id, data.template_params, data.public_key).then(
            () => {
                Swal.fire({
                    title: "Mensagem enviada!",
                    html: "<p>Obrigado por entrar em contato comigo.</p><p>Eu responderei a sua mensagem em breve.</p>",
                    icon: "success",
                    showCloseButton: true,
                    timer: 6000,
                    timerProgressBar: true,
                    confirmButtonText: "Fechar",
                    confirmButtonColor: "#ef4444",
                });

                reset();
            },
            () => {
                Swal.fire({
                    title: "Oops, algo deu errado!",
                    html: "<p>Infelizmente sua mensagem não pode ser enviada.</p><p>Favor tente me contactar de outra maneira.</p>",
                    icon: "error",
                    showCloseButton: true,
                    timer: 8000,
                    timerProgressBar: true,
                    confirmButtonText: "Fechar",
                    confirmButtonColor: "#ef4444",
                });
            },
        );
    }

    return <form className='flex flex-col gap-y-8' onSubmit={handleSubmit(onSubmit)}>
        <div className='relative'>
            <label htmlFor="name" className={`absolute -top-4 left-5 text-sm text-gray-700 bg-white p-1 z-10 ${errors.name && 'text-red-500'}`}>Nome <span className='text-red-500 font-bold'>*</span></label>
            <input {...register("name")} type='text' id='name' placeholder='Digite o seu Nome completo.' className={`flex w-full h-16 rounded-xl border border-gray-700 bg-none p-6 text-sm shadow-sm placeholder:text-gray-700 focus-visible:outline-none ${errors.name && 'border-red-500 placeholder:text-red-500'}`} />

            {errors.name && <div className='text-center bg-red-100 text-red-500 px-4 py-2 mt-3 rounded'>{errors.name.message}</div>}
        </div>

        <div className='relative'>
            <label htmlFor="email" className={`absolute -top-4 left-5 text-sm text-gray-700 bg-white p-1 z-10 ${errors.email && 'text-red-500'}`}>E-mail <span className='text-red-500 font-bold'>*</span></label>
            <input {...register("email")} type='email' id='email' placeholder='Digite o seu E-mail.' className={`flex w-full h-16 rounded-xl border border-gray-700 bg-none p-6 text-sm shadow-sm placeholder:text-gray-700 focus-visible:outline-none ${errors.email && 'border-red-500 placeholder:text-red-500'}`} />

            {errors.email && <div className='text-center bg-red-100 text-red-500 px-4 py-2 mt-3 rounded'>{errors.email.message}</div>}
        </div>

        <div className='relative'>
            <label htmlFor="message" className={`absolute -top-4 left-5 text-sm text-gray-700 bg-white p-1 z-10 ${errors.message && 'text-red-500'}`}>Insira sua mensagem aqui <span className='text-red-500 font-bold'>*</span></label>
            <textarea {...register("message")} id='message' placeholder='Digite sua mensagem.' className={`flex w-full h-44 rounded-xl border border-gray-700 bg-none p-6 text-sm shadow-sm placeholder:text-gray-700 focus-visible:outline-none ${errors.message && 'border-red-500 placeholder:text-red-500'}`} />

            {errors.message && <div className='text-center bg-red-100 text-red-500 px-4 py-2 mt-3 rounded'>{errors.message.message}</div>}
        </div>

        <button type='submit' disabled={isSubmitting} className='max-w-[250px] bg-red-500 text-white text-lg shadow flex items-center justify-center gap-2 p-3 whitespace-nowrap rounded-full font-medium focus-visible:outline-none hover:bg-white hover:text-red-500 hover:shadow-[inset_0_0_1px_2px_rgba(239,_68,_68,_1)] transition-all duration-500'>
            {isSubmitting ?
            <span>Sending ...</span> : 
            <>
                <span>Enviar</span>
                <Send size={24} />
            </>
            }
        </button>
    </form>;
}