'use client'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { useAddressContext } from '@/context/address-context'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import {
  Calendar as CalendarIcon,
  Check,
  ChevronRight,
  ChevronsUpDown,
} from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const secretariaFormSchema = z.object({
  cidades: z.string().min(2, {
    message: 'Erro cidades',
  }),
  cnpj: z.string().min(2, {
    message: 'Erro cnpj',
  }),
  razaoSocial: z.string().min(2, {
    message: 'Erro razaoSocial',
  }),
  nomeFantasia: z.string().min(2, {
    message: 'Erro nomeFantasia',
  }),
  naturezaJuridica: z.string().min(2, {
    message: 'Erro naturezaJuridica',
  }),
  dataCriacao: z.date({
    required_error: 'A date of birth is required.',
  }),
  decreto: z.string().min(2, {
    message: 'Erro decreto',
  }),
  secretario: z.string().min(2, {
    message: 'Erro secretario',
  }),
  vincEnteFederativo: z.string().min(2, {
    message: 'Erro vincEnteFederativo',
  }),
  prefeito: z.string().min(2, {
    message: 'Erro prefeito',
  }),
  endereco: z.object({
    logradouro: z.string().min(2, {
      message: 'Erro logradouro',
    }),
    numero: z.number(),
    bairro: z.string().min(2, {
      message: 'Erro bairro',
    }),
    cep: z.string().min(2, {
      message: 'Erro cep',
    }),
    complemento: z.string().min(2, {
      message: 'Erro complemento',
    }),
    distrito: z.string().min(2, {
      message: 'Erro zona',
    }),
    codigoDistrito: z.string().min(2, {
      message: 'Erro zona',
    }),
    subDistrito: z.string().min(2, {
      message: 'Erro zona',
    }),
    codigoSubDistrito: z.string().min(2, {
      message: 'Erro zona',
    }),
    estado: z.object({
      id: z.number(),
    }),
    cidade: z.object({
      id: z.number(),
    }),
  }),
  contato: z.object({
    telefones: z.array(
      z.object({
        numero: z.number(),
        tipo: z.string(),
      })
    ),
    emails: z.array(
      z.object({
        email: z.string().email(),
      })
    ),
  }),
})

type SecretariaFormSchemaTypes = z.infer<typeof secretariaFormSchema>

// This can come from your database or API.
const defaultValues: Partial<SecretariaFormSchemaTypes> = {}

export function SecretariaForm() {
  const [valueTabs, setValueTabs] = useState('identification')
  const { listCidades } = useAddressContext()

  // 1. Define your form.
  const form = useForm<SecretariaFormSchemaTypes>({
    resolver: zodResolver(secretariaFormSchema),
    defaultValues,
  })

  // 2. Define a submit handler.
  function onSubmit(values: SecretariaFormSchemaTypes) {
    console.log('values', values)
    // console.log('validation', validation)
  }

  function TabsListForm() {
    const titleTabs = [
      {
        number: 1,
        title: 'Identificação',
        value: 'identification',
      },
      {
        number: 2,
        title: 'Endereço',
        value: 'address',
      },
      {
        number: 3,
        title: 'Contatos',
        value: 'contacts',
      },
    ]

    return (
      <>
        {titleTabs.map((item) => {
          return (
            <TabsTrigger value={item.value} className="flex flex-row gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full text-primary-foreground transition-all duration-300 group-data-[state=active]:bg-primary group-data-[state=inactive]:bg-gray-400">
                {item.number}
              </div>
              {item.title}
            </TabsTrigger>
          )
        })}
      </>
    )
  }

  function TooltipWithLabelForm(messageDescription: string) {
    return (
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="m-0 ml-2 h-4 w-4 rounded-full bg-slate-400 p-0 text-center text-xs font-normal text-white">
              ?
            </div>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            align="start"
            className="-ml-20 mb-2 max-w-sm"
          >
            <FormDescription>{messageDescription}</FormDescription>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }

  return (
    <Tabs
      defaultValue="identification"
      value={valueTabs}
      onValueChange={setValueTabs}
    >
      <TabsList className="mb-4 h-20 w-[400px] gap-5">
        <TabsListForm />
      </TabsList>
      <TabsContent value="identification" className="h-[600px]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            autoComplete="off"
            className="flex h-full max-w-4xl flex-col justify-between gap-6"
          >
            <div className="grid grid-cols-4 gap-6">
              <FormField
                control={form.control}
                name="razaoSocial"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <div className="flex items-center">
                      <FormLabel>Razão Social *</FormLabel>
                      {TooltipWithLabelForm(
                        'Informe o nome da razão social. Ex: Secretaria Municipal de Educação Rondônia'
                      )}
                    </div>
                    <FormControl>
                      <Input placeholder="Razão Social" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="nomeFantasia"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <div className="flex items-center">
                      <FormLabel>Nome Fantasia *</FormLabel>
                      {TooltipWithLabelForm(
                        'Informe o nome fantasia. Ex: Cantinho do Céu'
                      )}
                    </div>
                    <FormControl>
                      <Input
                        placeholder="Secretaria Municipal de Educação"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cnpj"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel>CNPJ *</FormLabel>
                      {TooltipWithLabelForm(
                        'Informe o CNPJ da secretaria. Ex: 24.167.744/0001-61'
                      )}
                    </div>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="24.167.744.0001-61"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="decreto"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel>Decreto *</FormLabel>
                      {TooltipWithLabelForm(
                        'Informe o nome ou as informações correspondente ao Decreto. Ex: 1564/1995'
                      )}
                    </div>
                    <FormControl>
                      <Input placeholder="1564/1995" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="vincEnteFederativo"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <div className="flex items-center">
                      <FormLabel>Natureza jurídica *</FormLabel>
                      {TooltipWithLabelForm(
                        'Informe o nome ou as informações relacionadas a natureza jurídica. Ex: Órgão Público do Poder Executivo Municipal'
                      )}
                    </div>
                    <FormControl>
                      <Input
                        placeholder="Órgão Público do Poder Executivo Municipal"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="secretario"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <div className="flex items-center">
                      <FormLabel>Secretário(a) *</FormLabel>
                      {TooltipWithLabelForm(
                        'Informe o nome do secretário(a). Ex: José Almeida'
                      )}
                    </div>
                    <FormControl>
                      <Input
                        placeholder="Secretaria Municipal de Educação"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="prefeito"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <div className="flex items-center">
                      <FormLabel>Prefeito *</FormLabel>
                      {TooltipWithLabelForm(
                        'Informe o nome do prefeito a cidade. Ex: Matheus Josefino'
                      )}
                    </div>
                    <FormControl>
                      <Input
                        placeholder="Secretaria Municipal de Educação"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="vincEnteFederativo"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <div className="flex items-center">
                      <FormLabel>Vinculado ao Ente Federativo *</FormLabel>
                      {TooltipWithLabelForm(
                        'Informe o Vinculado ao Ente Federativo. Ex: Prefeitura | Estado | Federal'
                      )}
                    </div>
                    <FormControl>
                      <Input
                        placeholder="Secretaria Municipal de Educação"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dataCriacao"
                render={({ field }) => (
                  <FormItem className="col-span-2 flex max-w-[220px] flex-col">
                    <div>
                      <div className="flex items-center">
                        <FormLabel>Data de criação</FormLabel>
                        {TooltipWithLabelForm(
                          'Selecione a data de criação da secretaria.'
                        )}
                      </div>
                    </div>
                    <Popover>
                      <PopoverTrigger>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            type="button"
                            className={cn(
                              'w-full pl-3 text-left font-normal',
                              !field.value && 'text-muted-foreground'
                            )}
                          >
                            {field.value ? (
                              format(field.value, 'PPP', { locale: ptBR })
                            ) : (
                              <span>Selecione uma Data</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date('1900-01-01')
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              className="col-start-4 col-end-5 flex h-12 w-min flex-row justify-center gap-2 self-end justify-self-end hover:bg-slate-100/50"
              variant="ghost"
              onClick={() => setValueTabs('address')}
            >
              Próximo
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all duration-300">
                <ChevronRight size={20} />
              </div>
            </Button>
          </form>
        </Form>
      </TabsContent>
      <TabsContent value="address" className="h-[600px]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex h-full max-w-4xl flex-col justify-between gap-6"
          >
            <div className="grid grid-cols-4 gap-6">
              <FormField
                control={form.control}
                name="endereco.cep"
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <div className="flex items-center">
                      <FormLabel>CEP *</FormLabel>
                      {TooltipWithLabelForm(
                        'Informe CEP do endereço Ex: 79588-225'
                      )}
                    </div>
                    <FormControl>
                      <Input placeholder="Razão Social" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="endereco.logradouro"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <div className="flex items-center">
                      <FormLabel>Logradouro *</FormLabel>
                      {TooltipWithLabelForm(
                        'Informe as informação do lougradouro. Ex: Rua Rio Grande'
                      )}
                    </div>
                    <FormControl>
                      <Input
                        placeholder="Secretaria Municipal de Educação"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="endereco.numero"
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <div className="flex items-center">
                      <FormLabel>Número*</FormLabel>
                      {TooltipWithLabelForm(
                        'Informe o numero do edifício Ex: 8856'
                      )}
                    </div>
                    <FormControl>
                      <Input placeholder="1995" type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="endereco.bairro"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <div className="flex items-center">
                      <FormLabel>Bairro *</FormLabel>
                      {TooltipWithLabelForm(
                        'Informe o nome do Bairro Ex: Bairro Jardim Belo'
                      )}
                    </div>
                    <FormControl>
                      <Input placeholder="Bairro Jardim Belo" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="endereco.complemento"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <div className="flex items-center">
                      <FormLabel>Complemento</FormLabel>
                      {TooltipWithLabelForm(
                        'Informe o completo. Ex: Tem uma arvore na frente e a cor do portão é verde.'
                      )}
                    </div>
                    <FormControl>
                      <Input placeholder="1564/1995" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cidades"
                render={({ field }) => (
                  <FormItem className="max-w-250px flex w-full flex-col">
                    <div className="flex items-center">
                      <FormLabel>Cidade</FormLabel>
                      {TooltipWithLabelForm('Informe o nome da Razão Social.')}
                    </div>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              'h-12 w-[250px] justify-between p-2 pl-4',
                              !field.value && 'text-muted-foreground'
                            )}
                          >
                            <span className="text-start">
                              {field.value
                                ? listCidades!.find(
                                    (item) => item.id === field.value
                                  )?.name
                                : 'Seleciona a cidade'}
                            </span>
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-[250px] p-0">
                        <Command>
                          <CommandInput placeholder="Pesquise a cidade..." />
                          <CommandEmpty>Cidade não encontrada.</CommandEmpty>
                          <CommandGroup>
                            <ScrollArea className="h-[300px]">
                              {listCidades!.map((item) => (
                                <CommandItem
                                  value={item.id}
                                  key={item.id}
                                  onSelect={(value) => {
                                    form.setValue('cidades', item.id)
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      'mr-2 h-4 w-4',
                                      item.id === field.value
                                        ? 'opacity-100'
                                        : 'opacity-0'
                                    )}
                                  />
                                  {/* {item.name} */}
                                  <div className="flex flex-col">
                                    <span className="text-sm">{item.name}</span>
                                    <span className="text-xs">
                                      ID: {item.id}
                                    </span>
                                  </div>
                                </CommandItem>
                              ))}
                            </ScrollArea>
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              className="col-start-4 col-end-5 flex h-12 w-min flex-row justify-center gap-2 self-end justify-self-end hover:bg-slate-100/50"
              variant="ghost"
              onClick={() => setValueTabs('contacts')}
            >
              Próximo
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all duration-300">
                <ChevronRight size={20} />
              </div>
            </Button>
          </form>
        </Form>
      </TabsContent>
      <TabsContent value="contacts" className="h-[600px]">
        Change your contacts here.
      </TabsContent>
    </Tabs>
  )
}
