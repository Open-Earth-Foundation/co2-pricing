import type { IAMModel } from "types/iam/model";


export const IAM_MODELS: IAMModel[] = [
    {
        id: "mimifund1",
        label: "mimifund",
        name: "MimiFund",
        description: "Mimi is a simple IAM model that uses a single discount rate and a single year.",
        url: "learn/mimi",
        slider: {
            min: 0,
            max: 0.0575,
            step: 0.0025,
            defaultValue: 0.01,
        },
    }
]


