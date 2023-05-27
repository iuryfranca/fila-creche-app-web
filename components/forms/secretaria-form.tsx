'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
})

export function SecretariaForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="gap-5 pb-5">
        <TabsTrigger value="account" className="flex flex-row gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full text-primary-foreground transition-all duration-300 group-data-[state=active]:bg-primary group-data-[state=inactive]:bg-gray-400">
            1
          </div>
          Identificação
        </TabsTrigger>
        <TabsTrigger value="endereco" className="flex flex-row gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full text-primary-foreground transition-all duration-300 group-data-[state=active]:bg-primary group-data-[state=inactive]:bg-gray-400">
            2
          </div>
          Endereço
        </TabsTrigger>
        <TabsTrigger value="contatos" className="flex flex-row gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full text-primary-foreground transition-all duration-300 group-data-[state=active]:bg-primary group-data-[state=inactive]:bg-gray-400">
            3
          </div>
          Contatos
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  )
}
