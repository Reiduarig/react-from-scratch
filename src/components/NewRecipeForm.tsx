import { useState } from "react";
import { type FormErrors } from "../types";

const initialState = {
    name: "",
    image: "",
    prepTimeMinutes: "",
    cookTimeMinutes: "",
    servings: "",
    difficulty: "Fácil",
    cuisine: "",
    caloriesPerServing: "",
    tags: "",
    mealType: "",
    ingredients: "",
    instructions: "",
};

export function NewRecipeForm() {
    const [form, setForm] = useState(initialState);
    const [errors, setErrors] = useState<FormErrors>({});

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(f => ({ ...f, [name]: value }));
    }

    function validate() {
        const newErrors: FormErrors = {};
        if (!form.name) newErrors.name = "El nombre es obligatorio";
        if (!form.image) newErrors.image = "La imagen es obligatoria";
        if (!form.prepTimeMinutes || isNaN(form.prepTimeMinutes)) newErrors.prepTimeMinutes = "Tiempo de preparación válido requerido";
        if (!form.cookTimeMinutes || isNaN(form.cookTimeMinutes)) newErrors.cookTimeMinutes = "Tiempo de cocción válido requerido";
        if (!form.servings || isNaN(form.servings)) newErrors.servings = "Porciones válidas requeridas";
        if (!form.cuisine) newErrors.cuisine = "La cocina es obligatoria";
        if (!form.caloriesPerServing || isNaN(form.caloriesPerServing)) newErrors.caloriesPerServing = "Calorías válidas requeridas";
        if (!form.tags) newErrors.tags = "Al menos una etiqueta";
        if (!form.mealType) newErrors.mealType = "Tipo de comida requerido";
        if (!form.ingredients) newErrors.ingredients = "Ingredientes requeridos";
        if (!form.instructions) newErrors.instructions = "Instrucciones requeridas";
        return newErrors;
    }

    function handleSubmit(e) {
        e.preventDefault();
        const val = validate();
        setErrors(val);
        if (Object.keys(val).length === 0) {
            // Aquí iría la lógica para guardar la receta
            alert("Receta agregada correctamente (simulado)");
            setForm(initialState);
        }
    }

    return (
        <form className="max-w-xl mx-auto mt-8 bg-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit} autoComplete="off">
            <h2 className="font-bold text-2xl mb-6 text-blue-700">Agregar nueva receta</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block font-medium">Nombre *</label>
                    <input name="name" value={form.name} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded p-2" />
                    {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
                </div>
                <div>
                    <label className="block font-medium">Imagen (URL) *</label>
                    <input name="image" value={form.image} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded p-2" />
                    {errors.image && <span className="text-red-500 text-xs">{errors.image}</span>}
                </div>
                <div>
                    <label className="block font-medium">Tiempo preparación (min) *</label>
                    <input name="prepTimeMinutes" value={form.prepTimeMinutes} onChange={handleChange} type="number" min="1" className="mt-1 block w-full border border-gray-300 rounded p-2" />
                    {errors.prepTimeMinutes && <span className="text-red-500 text-xs">{errors.prepTimeMinutes}</span>}
                </div>
                <div>
                    <label className="block font-medium">Tiempo cocción (min) *</label>
                    <input name="cookTimeMinutes" value={form.cookTimeMinutes} onChange={handleChange} type="number" min="1" className="mt-1 block w-full border border-gray-300 rounded p-2" />
                    {errors.cookTimeMinutes && <span className="text-red-500 text-xs">{errors.cookTimeMinutes}</span>}
                </div>
                <div>
                    <label className="block font-medium">Porciones *</label>
                    <input name="servings" value={form.servings} onChange={handleChange} type="number" min="1" className="mt-1 block w-full border border-gray-300 rounded p-2" />
                    {errors.servings && <span className="text-red-500 text-xs">{errors.servings}</span>}
                </div>
                <div>
                    <label className="block font-medium">Dificultad *</label>
                    <select name="difficulty" value={form.difficulty} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded p-2">
                        <option value="Fácil">Fácil</option>
                        <option value="Media">Media</option>
                        <option value="Difícil">Difícil</option>
                    </select>
                </div>
                <div>
                    <label className="block font-medium">Cocina *</label>
                    <input name="cuisine" value={form.cuisine} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded p-2" />
                    {errors.cuisine && <span className="text-red-500 text-xs">{errors.cuisine}</span>}
                </div>
                <div>
                    <label className="block font-medium">Calorías por porción *</label>
                    <input name="caloriesPerServing" value={form.caloriesPerServing} onChange={handleChange} type="number" min="1" className="mt-1 block w-full border border-gray-300 rounded p-2" />
                    {errors.caloriesPerServing && <span className="text-red-500 text-xs">{errors.caloriesPerServing}</span>}
                </div>
                <div>
                    <label className="block font-medium">Etiquetas (separadas por coma) *</label>
                    <input name="tags" value={form.tags} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded p-2" />
                    {errors.tags && <span className="text-red-500 text-xs">{errors.tags}</span>}
                </div>
                <div>
                    <label className="block font-medium">Tipo de comida *</label>
                    <input name="mealType" value={form.mealType} onChange={handleChange} placeholder="Ej: Breakfast, Dinner" className="mt-1 block w-full border border-gray-300 rounded p-2" />
                    {errors.mealType && <span className="text-red-500 text-xs">{errors.mealType}</span>}
                </div>
            </div>
            <div className="mt-4">
                <label className="block font-medium">Ingredientes (uno por línea) *</label>
                <textarea name="ingredients" value={form.ingredients} onChange={handleChange} rows={3} className="mt-1 block w-full border border-gray-300 rounded p-2" />
                {errors.ingredients && <span className="text-red-500 text-xs">{errors.ingredients}</span>}
            </div>
            <div className="mt-4">
                <label className="block font-medium">Instrucciones (una por línea) *</label>
                <textarea name="instructions" value={form.instructions} onChange={handleChange} rows={3} className="mt-1 block w-full border border-gray-300 rounded p-2" />
                {errors.instructions && <span className="text-red-500 text-xs">{errors.instructions}</span>}
            </div>
            <button type="submit" className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded p-3 transition-colors">Agregar receta</button>
        </form>
    );
}
