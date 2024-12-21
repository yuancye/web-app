from django.db import models

class Order(models.Model):
    customer_id = models.CharField(max_length=255)  # Clerk's user ID
    order_details = models.JSONField()  # Store order items as JSON
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order {self.id} from Customer {self.customer_id}"
