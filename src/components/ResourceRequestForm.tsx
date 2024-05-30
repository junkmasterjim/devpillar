"use client";

import { Category, categories } from "@/lib/resources";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

import { createClient } from "@/lib/supabase/client";
import { toast } from "sonner";
import { useState } from "react";

const formSchema = z.object({
  name: z
    .string({ required_error: "Resource name is required" })
    .min(2, {
      message: "Resource name must be at least 2 characters",
    })
    .max(50, {
      message: "Resource name cannot be more than 50 characters",
    }),
  description: z
    .string({ required_error: "Description is required" })
    .min(20, {
      message: "Description must be at least 20 characters",
    })
    .max(500, {
      message: "Description cannot be more than 500 characters",
    }),
  url: z
    .string({ required_error: "URL is required" })
    .url({ message: "Invalid URL" }),
  category: z.string({ required_error: "Category is required" }).min(2),
  category2: z.string().optional(),
});

const supabase = createClient();

export function ResourceRequestForm({
  className,
}: React.ComponentProps<"form">) {
  const [submitting, setSubmitting] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      url: "",
      category: "",
      category2: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setSubmitting(true);
    const { name, description, url, category, category2 } = values;

    const promise = new Promise(
      async (resolve, reject) =>
        await supabase
          .from("resourceRequests")
          .insert([
            {
              name: name,
              description: description,
              url: url,
              categories: category2 !== "" ? [category, category2] : [category],
            },
          ])
          .then((res) => {
            if (res.error) {
              reject(res.error);
              console.log(res.error);
              setSubmitting(false);
            }
            resolve(res);
            form.reset();
            setSubmitting(false);
          }),
    );
    toast.promise(promise, {
      loading: "Submitting...",
      success: "Resource request submitted!",
      error: "An error occurred",
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("grid items-start gap-2 md:gap-4", className)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <div>
                <FormLabel>Name</FormLabel>
              </div>
              <FormControl>
                <Input placeholder="DevPillar" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <div>
                <FormLabel>Description</FormLabel>
                <FormDescription className="text-muted">
                  Describe the resource in 2-3 sentences
                </FormDescription>
              </div>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="DevPillar is the foundation of your next project. An open source collection of quality resources for developers & designers."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <div>
                <FormLabel>URL</FormLabel>
              </div>
              <FormControl>
                <Input placeholder="https://devpillar.org" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-2">
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <div>
                  <FormLabel>Category</FormLabel>
                  <FormDescription className="text-muted">
                    Required
                  </FormDescription>
                </div>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Categories</SelectLabel>
                      {categories.map((cat: Category) => (
                        <SelectItem key={cat.name} value={cat.name}>
                          {cat.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category2"
            render={({ field }) => (
              <FormItem>
                <div>
                  <FormLabel>Secondary Category</FormLabel>
                  <FormDescription className="text-muted">
                    Optional
                  </FormDescription>
                </div>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Categories</SelectLabel>
                      {categories.map((cat: Category) => (
                        <SelectItem key={cat.name} value={cat.name}>
                          {cat.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </div>

        <Button disabled={submitting} variant={"white"} type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
