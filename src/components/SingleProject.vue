<template>
    <div class="project" :class="{ complete: project.complete }">
        <div class="actions">
            <h3 @click=" showDetails = !showDetails">{{ project.title }}</h3>
            <div class="icons"> 
                <span @click="toggeleComplete" class="material-symbols-outlined tick">done</span>
                <span @click="deletProject" class="material-symbols-outlined">delete</span>
                <router-link :to="{ name: 'EditProject', params: {id: project.id}}">
                    <span class="material-symbols-outlined">edit</span>
                </router-link>
            </div>
        </div>
        <div v-if="showDetails" class="details">
            {{ project.details }}
        </div>
    </div>
</template>
<script>
export default {
    props: ['project'],
    data(){
        return {
            showDetails: false,
            uri: 'http://localhost:3000/projects/' + this.project.id
        }
    },
    methods: {
        deletProject() {
            fetch(this.uri, { method: 'DELETE'})
                .then(() => this.$emit('delete', this.project.id))
                .catch(err => console.log(err))
        },
        toggeleComplete() {
            fetch(this.uri, { 
                method: 'PATCH', 
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({ complete: !this.project.complete })
         }).then(() => {
            this.$emit('complete', this.project.id)
         }).catch((err) => console.log(err))

        }
    }
}
</script>
<style>
.project {
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
    border-left: 4px solid #e90074;
}

h3 {
    cursor: pointer;
}

.actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.material-symbols-outlined {
    font-size: 24px;
    margin-left: 10px;
    color: #bbb;
    cursor: pointer;
}

.material-symbols-outlined:hover {
    color: #777;
}

.project.complete {
    border-left: 4px solid #00ce89;
}

.project.complete .tick {
    color: #00ce89;
}

</style>