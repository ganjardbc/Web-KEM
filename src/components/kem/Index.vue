<template>
    <div>
        <div class="grid grid-2x margin-bottom-10px">
            <div class="col-1">
                <h1>Daftar KEM</h1>
            </div>
            <div class="col-2 content-right">
                <button class="btn btn-circle btn-red">
                    <i class="fa fa-lg fa-plus" />
                </button>
            </div>
        </div>
        <vuetable ref="vuetable"
			:api-mode="false"
            :fields="fields"
            :per-page="perPage"
            :data-manager="dataManager"
            pagination-path="pagination"
            @vuetable:pagination-data="onPaginationData"
                >
                    <div slot="actions" slot-scope="props">
                        <button 
                            class="btn btn-small-circle btn-grey" 
                            @click="onActionClicked('view-item', props.rowData)"
                        >
                            <i class="fa fa-lw fa-search-plus"></i>
                        </button>
                        <button 
                            class="btn btn-small-circle btn-grey" 
                            @click="onActionClicked('edit-item', props.rowData)"
                        >
                            <i class="fa fa-lw fa-pencil-alt"></i>
                        </button>
                        <button 
                            class="btn btn-small-circle btn-grey" 
                            @click="onActionClicked('delete-item', props.rowData)"
                        >
                            <i class="fa fa-lw fa-trash-alt"></i>
                        </button>
                    </div>
        </vuetable>
        <div style="padding-top:10px">
            <vuetable-pagination ref="pagination"
                :css="css.pagination"
                @vuetable-pagination:change-page="onChangePage"
            ></vuetable-pagination>
        </div>
    </div>
</template>

<script>
import Vuetable from "vuetable-2";
import VuetablePagination from "vuetable-2/src/components/VuetablePagination";
import FieldsDef from "./FieldsDef.js";
import axios from "axios";
import _ from "lodash";

import TableCss from '../modules/TableCss'

export default {
    components: {
        Vuetable,
        VuetablePagination
    },

    data() {
        return {
            fields: FieldsDef,
            perPage: 7,
            css: TableCss,
            data: []
        };
    },

    watch: {
        data(newVal, oldVal) {
            this.$refs.vuetable.refresh();
        }
    },

    mounted() {
        axios.get("https://vuetable.ratiw.net/api/users").then(response => {
            this.data = response.data.data;
            console.log(data)
        });
    },

    methods: {
        onPaginationData(paginationData) {
            this.$refs.pagination.setPaginationData(paginationData);
        },
        onChangePage(page) {
            this.$refs.vuetable.changePage(page);
        },
        dataManager(sortOrder, pagination) {
            if (this.data.length < 1) return;

            let local = this.data;

            // sortOrder can be empty, so we have to check for that as well
            if (sortOrder.length > 0) {
                console.log("orderBy:", sortOrder[0].sortField, sortOrder[0].direction);
                local = _.orderBy(
                local,
                sortOrder[0].sortField,
                sortOrder[0].direction
                );
            }

            pagination = this.$refs.vuetable.makePagination(
                local.length,
                this.perPage
            );
            console.log('pagination:', pagination)
            let from = pagination.from - 1;
            let to = from + this.perPage;

            return {
                pagination: pagination,
                data: _.slice(local, from, to)
            };
        },
        onActionClicked(action, data) {
            console.log("slot actions: on-click", data.name);
        }
    }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
button.ui.button {
  padding: 8px 3px 8px 10px;
	margin-top: 1px;
	margin-bottom: 1px;
}
</style>